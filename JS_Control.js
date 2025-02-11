videojs.getPlayer("myPlayerID").ready(function() {
  var myPlayer = this,
  jumpAmount = 10,
  controlBar,
  insertBeforeNode,
  newElementBB = document.createElement("div"),
  newElementFB = document.createElement("div"),
  newImageBB = document.createElement("img"),
  newImageFB = document.createElement("img");
  newElementBB.id = "backButton";
  newElementFB.id = "forwardButton";
  controlBar = myPlayer.$(".vjs-control-bar");
  insertBeforeNode = myPlayer.$(".vjs-volume-panel");
  controlBar.insertBefore(newElementBB, insertBeforeNode);
  controlBar.insertBefore(newElementFB, insertBeforeNode);
  newElementBB.addEventListener("click", function() {
    var newTime,
      rewindAmt = jumpAmount,
      videoTime = myPlayer.currentTime();
    if (videoTime >= rewindAmt) {
      newTime = videoTime - rewindAmt;
    } else {
      newTime = 0;
    }
    myPlayer.currentTime(newTime);
  });
  newElementFB.addEventListener("click", function() {
    var newTime,
      forwardAmt = jumpAmount,
      videoTime = myPlayer.currentTime(),
      videoDuration = myPlayer.duration();
    if (videoTime + forwardAmt <= videoDuration) {
      newTime = videoTime + forwardAmt;
    } else {
      newTime = videoDuration;
    }
    myPlayer.currentTime(newTime);
  });
});