
            document.addEventListener('DOMContentLoaded', function() {
                var hasCSS = window.getComputedStyle(document.querySelector('#l-no-css')).display === 'none';
                if (!hasCSS) {
                    var svgs = document.querySelectorAll('svg');
                    for (var x = 0; x < svgs.length; x++) {
                        svgs[x].style.display = 'none';
                    }
                    window.scroll(0, 0);
                }
            });
        