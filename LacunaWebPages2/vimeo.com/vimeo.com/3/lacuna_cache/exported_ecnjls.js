
                var showVariant = function() {___jdce_logger("lacuna_cache/exported_ecnjls.js", 35, 971);

                    var showElements = function(elementsList) {___jdce_logger("lacuna_cache/exported_ecnjls.js", 88, 302);
                        for (var i = 0; i < elementsList.length; i++) {
                            elementsList[i].classList.remove('hide');
                        }
                    };

                    if (window.ABLincoln) {
                        if (window.ABLincoln.getTest('JS.Topnav.SolutionsDropdown').get('show_solutions_dropdown', 'control') === 'variant') {
                            showElements(document.querySelectorAll('.js-top_nav_new'));
                        } else {
                            showElements(document.querySelectorAll('.js-top_nav_old'));
                        }
                    } else {
                        // in case some error getting the ABLincon test , show the new menu
                        showElements(document.querySelectorAll('.js-top_nav_new'));
                    }
                };
                showVariant();
            