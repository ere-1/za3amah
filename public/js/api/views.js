

const views = async () => {
    const viewsNumber = document.getElementById('viewsNumber');
  try {
    const res = await fetch('/api/views');
    const data = await res.json();
    console.log(data);
    viewsNumber.innerHTML = data.views;
  } catch (err) {
    console.log(err);
  }
}
export default views;

