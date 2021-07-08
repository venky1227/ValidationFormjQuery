$(function () {
  var $registerForm = $("#registration");
  $.validator.addMethod(
    "noSpace",
    function (value, element) {
      return value == "" || value.trim().length != 0;
    },
    "Space are not allowed"
  );
  if ($registerForm.length) {
    $registerForm.validate({
      rules: {
        username: {
          required: true,
          noSpace: true,
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          noSpace: true,
        },
        confirm: {
          required: true,
          noSpace: true,
          equalTo: "#password",
        },
        fname: {
          required: true,
          noSpace: true,
        },
        lname: {
          required: true,
          noSpace: true,
        },
        gender: {
          required: true,
        },
        hobbies: {
          required: true,
        },
        country: {
          required: true,
        },
        address: {
          required: true,
          noSpace: true,
        },
      },
      messages: {
        username: {
          required: "Username is mandatory!",
        },
        email: {
          required: "Please enter email!",

          email: "Please enter valid email!",
        },
        password: {
          required: "Please enter password!",
        },
        confirm: {
          required: "Please enter confirm password!",
          equalTo: "Please enter same password!",
        },
        fname: {
          required: "Please enter first name!",
        },
        lname: {
          required: "Please enter last name!",
        },
        country: {
          required: "Please select country!",
        },
        address: {
          required: "Please enter address!",
        },
      },
      errorPlacement: function (error, element) {
        if (element.is(":radio")) {
          error.appendTo(element.parents(".gender"));
        } else if (element.is(":checkbox")) {
          error.appendTo(element.parents(".hobbies"));
        } else {
          error.insertAfter(element);
        }
      },
    });
  }
});
