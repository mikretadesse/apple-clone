$(document).ready(function () {
  const form = $("#addProductForm");

  // Remove red border when user types in input or textarea
  form.find("input, textarea").on("input", function () {
    if ($(this).val()) {
      $(this).css("border-color", "");
    }
  });

  form.on("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Reset previous error styles
    form.find("input, textarea").css("border-color", "");
    $("#status").removeClass("success error").hide();

    // Validate each input and textarea
    form.find("input, textarea").each(function () {
      if (!$(this).val()) {
        $(this).css("border-color", "red");
        isValid = false;
      }
    });

    if (!isValid) {
      $("#status")
        .text("❌ Please fill out all required fields!")
        .addClass("error")
        .slideDown();

      setTimeout(() => {
        $("#status").slideUp();
      }, 3000);

      return;
    }

    // Serialize form data
    const formData = form.serialize();
    
    $("#addProductForm").on("submit", function (e) {
      const start = $("[name='starting_price']").val();
      if (isNaN(start) || start.trim() === "") {
        e.preventDefault();
        alert("⚠️ Please enter a valid number for Starting Price!");
      }
    });

    // Send AJAX request
    $.ajax({
      url: "http://localhost:2024/iphone",
      type: "POST",
      data: formData,
      dataType: "json",
      success: function (response) {
        const status = $("#status");

        if (response.success) {
          status
            .removeClass("error")
            .addClass("success")
            .text(" All data submitted successfully!")
            .slideDown();

          // Clear all input and textarea fields
          form[0].reset();
          form.find("input, textarea").css("border-color", "");
        } else {
          status
            .removeClass("success")
            .addClass("error")
            .text(
              "❌ Error submitting data: " +
                (response.message || "Unknown error")
            )
            .slideDown();
        }

        setTimeout(() => {
          status.slideUp();
        }, 3000);
      },
      error: function (xhr) {
        const status = $("#status");
        let errorMsg = "Something went wrong!";
        if (xhr.responseJSON && xhr.responseJSON.message) {
          errorMsg = xhr.responseJSON.message;
        }

        status
          .removeClass("success")
          .addClass("error")
          .text("❌ " + errorMsg)
          .slideDown();

        setTimeout(() => {
          status.slideUp();
        }, 3000);
      },
    });
  });
});
