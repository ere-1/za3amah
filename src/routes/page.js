const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('page_stats')
    .select('views')
    .eq('id', 1)
    .maybeSingle();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // If the row doesn't exist, create it with 1 view
  if (!data) {
    const { error: insertError } = await supabase
      .from('page_stats')
      .insert([{ id: 1, views: 1 }]);

    if (insertError) {
      return res.status(500).json({ error: insertError.message });
    }

    return res.json({ views: 1 });
  }

  // If the row exists, increment the view count
  const newViews = data.views + 1;

  const { error: updateError } = await supabase
    .from('page_stats')
    .update({ views: newViews })
    .eq('id', 1);

  if (updateError) {
      return res.status(500).json({ error: updateError.message });
  }

  res.json({ views: newViews });
});

module.exports = router;