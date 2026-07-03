import views from "./api/views.js";
import musicPlayer from "./logic/music-player.js";
import loadingAnimate from "./animation/startup-animation.js";
import initParticles from "./animation/mouseanimate.js";

views();
musicPlayer();
loadingAnimate();
initParticles();