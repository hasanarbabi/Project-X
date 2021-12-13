// Click Function to show and hide section

$(".btn").click(function show() {
    $("#spinner").removeClass("d-none");
    loading();
    $(".show").addClass("d-none");
    $(this.id).removeClass("d-none");
    console.log(this.id);
    $(".btn").removeClass("bg-white text-success fw-bold");
    $(this).addClass("bg-white text-success fw-bold");
});

// Loading Function to load on each click

function loading() {
    $.ajax({
        type: "GET",
        url: "https://api.jsonbin.io/b/608d7d2692cb9267d0c8fc72",
        success: function (res) {
            $("#spinner").addClass("d-none");
        }
    })
}