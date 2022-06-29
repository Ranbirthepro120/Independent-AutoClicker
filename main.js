var clicks = 0
function update()
{
      clicks = clicks + 1;
      localStorage.setItem("Clicks", clicks);

      document.getElementById("set").innerHTML = clicks;
}
function reset()
{
      clicks = 0
      document.getElementById("set").innerHTML = clicks;
}