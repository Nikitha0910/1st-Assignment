function submit_by_id() {
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    if (validation()) // Calling validation function
    {
    document.getElementById("form_id").submit(); //form submission
    return this.firstName + " " + this.lastName + " is elegeble for voting in the year 2023"
    }
    }