const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

//keep track of the last checked item
let lastChecked;

//handle the click event
function handleCheck(e) {
  //Check if they had the shift key down
  //AND check that they are checking it

  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox == this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between bro');
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    })
  }
  //assign current check to lastChecked
  lastChecked = this;
}

//listen for when one of checkboxes get clicked or changed
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));