$(document).ready(function () {
    $(".hideShow").first().css("display", "block");

    $(document).on("click", ".next", function() {
        const age = parseInt($("#age").val());
        if (isNaN(age) || 
            ($(this).closest('.hideShow').find("input[type=radio]").length > 0 &&
             $(this).closest('.hideShow').find("input[type=radio]:checked").length === 0)) {
            alert("Please answer the question.");
            return;
        }
        $(this).closest('.hideShow').hide().next().show();
    });

    $("#bestRecommendation").submit(function (event) {        
        const age = parseInt($("#age").val());
        const gender = $('input[name=gender]:checked', '#bestRecommendation').val();
        const drink = $('input[name=drink]:checked', '#bestRecommendation').val();
        const strenghts = $('input[name=strenghts]:checked', '#bestRecommendation').val();
        const subject = $('input[name=subject]:checked', '#bestRecommendation').val();
        const temperament = $('input[name=temperament]:checked', '#bestRecommendation').val();
        const personality = $('input[name=personality]:checked', '#bestRecommendation').val();
        
        if ($(this).find('input[type=button].next:visible').length > 0) {
            $(this).find('input[type=button].next:visible').click();
            event.preventDefault();
            return;
        }
        
        let ourRecommendation = "Python";

        if (gender === 'male' &&
            age < 35  &&
            (drink === 'alcohol' || 
            drink === 'coffee' ||
            strenghts === 'problem-solving' ||
            subject === 'geometry' ||
            temperament === 'melancholic' ||
            personality === 'director')) {
               ourRecommendation = "C++";
        }
        else if (gender === 'male' &&
            age >35 &&
            (drink ==='water' ||
            drink ==='tea'||
            strenghts === 'attention to detail' ||
            subject === 'algebra' ||
            temperament === 'phlegmatic' ||
            personality === 'thinker')) {
                ourRecommendation= "Python";
            }
        else if (gender === 'female' &&
            age >35 &&
            (drink ==='coffee' ||
            drink ==='tea' ||
            strenghts === 'logical thinking'||
            subject === 'history' ||
            temperament === 'choleric' ||
            personality === 'socializer')) {
                ourRecommendation = "HTML & CSS";
            }
        else if (gender === 'female' &&
            age <35 &&
            (drink === 'alcohol' ||
            drink === 'water' ||
            strenghts === 'work well on a team' ||
            subject === 'design' ||
            temperament === 'sanguine' ||
            personality === 'supporter')) {
                ourRecommendation ="Ruby";
            }

        $("#program").text(ourRecommendation);
        $("#ourRecommendation").show();
        $(this).hide();

        event.preventDefault();
    });
});