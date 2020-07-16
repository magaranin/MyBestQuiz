$(document).ready(function () {
    $(".hideShow").first().css("display", "block");

    $(document).on("click", ".next", function() {
        $(this).closest('.hideShow').hide().next().show();
    })

    $("#bestRecommendation").submit(function (event) {
        alert();
        const age = parseInt($("#age").val());
        const gender = $("#gender").val();
        const drink = $("#drink").val();
        const strenghts = $("#strenghts").val();
        const knowledge = $("#knowledge").val();
        const temperament = $("#temperament").val();
        const personality = $("#personality").val();

        let ourRecommendation = "Python";
        if (isNaN(age)) {
            alert('Please enter your age.');
            return;
        }

        if (gender === 'male' &&
            age < 35  &&
            (drink === 'alcohol' || 
            drink === 'coffee' ||
            strenghts === 'problem-solving' ||
            knowledge === 'geometry' ||
            temperament === 'melancholic' ||
            personality === 'director')) {
               ourRecommendation = "C++";
        }
        else if (gender === 'male' &&
            age >35 &&
            (drink ==='water' ||
            drink ==='tea'||
            strenghts === 'attention to detail' ||
            knowledge === 'algebra' ||
            temperament === 'phlegmatic' ||
            personality === 'thinker')) {
                ourRecommendation= "Python";
            }
        else if (gender === 'female' &&
            age >35 &&
            (drink ==='coffee' ||
            drink ==='tea' ||
            strenghts === 'logical thinking'||
            knowledge === 'history' ||
            temperament === 'choleric' ||
            personality === 'socializer')) {
                ourRecommendation = "HTML & CSS";
            }
        else if (gender === 'female' &&
            age <35 &&
            (drink === 'alcohol' ||
            drink === 'water' ||
            strenghts === 'work well on a team' ||
            knowledge === 'design' ||
            temperament === 'sanguine' ||
            personality === 'supporter')) {
                ourRecommendation ="Ruby";
            }
            $("#program").text(ourRecommendation);
            $("#ourRecommendation").show(); 

        event.preventDefault();
    });
});