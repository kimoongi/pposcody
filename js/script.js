// $(document).ready(function(){
//     function openInquery() {
//         console.log("open");
//         $('#inquery').addClass('visible');
//     }

//     function closeInquery() {
//         console.log("close");
//         $('#inquery').removeClass('visible');
//     }

//     $('.modal').click(function(){
//         $('.black-bg').fadeIn();
//     });
//     $('.c-btn').click(function(){
//         $('.black-bg').fadeOut();
//     });

//     $('.inputField').on('input', updateButtonState);

//     function updateButtonState() {
//         var allInputsFilled = $('.inputField').toArray().every(function(input) {
//         return $(input).val().trim() !== '';
//         });

//         if (allInputsFilled) {
//         $('#go').addClass('active');
//         } else {
//         $('#go').removeClass('active');
//         }
//     }

// });