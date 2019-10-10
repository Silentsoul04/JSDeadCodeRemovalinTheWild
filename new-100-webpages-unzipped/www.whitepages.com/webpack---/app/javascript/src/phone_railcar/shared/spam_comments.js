import WPR from 'wpr-helpers';

$(function() {
    var create_comments = function(template, comments, commentList) {
        if (!commentList.length) return;

        for (var i = 0; i < comments.length; i++) {
            var comment = comments[i];

            var dateObj = new Date(comment.timestamp);
            var dateOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            var date = dateObj.toLocaleDateString('en-US', dateOptions);
            var time = dateObj.toLocaleTimeString();

            var elem = $(template)
                .find('.date')
                .text(date)
                .end()
                .find('.time')
                .text(time)
                .end()
                .find('.text')
                .text(comment.content)
                .end();
            commentList.append(elem);
        }
    };

    var initViewMoreButton = function(commentList) {
        commentList
            .parent()
            .find('.view-all-comments')
            .on('click', function(e) {
                e.preventDefault();
                var comment = commentList.find('.comment.hide');
                comment.removeClass('hide');
                $(this).remove();
                return false;
            });
    };

    var create_comment_lists = function(template, comments) {
        var commentList = $('ul.comments-list').empty(); // list for first three
        var commentListCont = $('ul.comments-list-cont').empty(); // list for the rest
        var mobile_case = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );

        if ($('body').hasClass('phone-spam')) {
            // new page
            var numCommentShow = mobile_case ? 2 : 5;
            if (comments.length <= 3) {
                create_comments(template, comments, commentList);
            } else {
                create_comments(template, comments.slice(0, 3), commentList);
                create_comments(
                    template,
                    comments.slice(3, comments.length),
                    commentListCont
                );
                hide_extra_comments(numCommentShow, commentListCont);
                initViewMoreButton(commentListCont);
                $('.spam-comments-cont').removeClass('hide');
                $('.spam-comments-cont').addClass('in');
            }
        } else if (
            mobile_case ||
            comments.length <= 3 ||
            commentListCont.length == 0
        ) {
            create_comments(template, comments, commentList);
            hide_extra_comments(mobile_case ? 3 : 20, commentList);
            initViewMoreButton(commentList);
        } else {
            create_comments(template, comments.slice(0, 3), commentList);
            create_comments(
                template,
                comments.slice(3, comments.length),
                commentListCont
            );
            hide_extra_comments(15, commentListCont);
            initViewMoreButton(commentListCont);
            $('.spam-comments-cont').removeClass('hide');
            $('.spam-comments-cont').addClass('in');
        }

        $('.spam-comments').removeClass('hide');
        $('.spam-comments').addClass('in');
    };

    var hide_extra_comments = function(default_shown, commentsList) {
        var comments = commentsList.find('.comment');

        if (comments.length > default_shown) {
            for (var i = default_shown; i < comments.length; i++) {
                $(comments[i]).addClass('hide');
            }
            var commentWrapper = commentsList.parent();
            commentWrapper.find('.view-all-comments').removeClass('hide');
            commentWrapper.find('.view-all-comments').addClass('in');
        }
    };

    var updateSpamComments = function() {
        // Spam comemnts only appear on spam page - on other pages, no reason to load comments
        if ($('.spam-comments').length == 0) return;
        var form = $('#spam-score-form');
        if (form.length > 0) {
            $.ajax({
                type: 'GET',
                url: form.attr('action'),
                cache: false,
                dataType: 'json',
                success: function(data, status, jqxhr) {
                    for (var i = 0; i < data.comments.length; i++) {
                        if (
                            data.comments[i].content === '' ||
                            data.comments[i].content === null
                        ) {
                            data.comments.splice(i, 1);
                        }
                    }

                    if (data.comments.length > 0) {
                        if ($('#comment-template').length > 0) {
                            var template = $('#comment-template').html();
                            create_comment_lists(template, data.comments);
                        }
                    }
                },
                error: function(xhr, status, err) {}
            });
        }
    };

    var display_message = function(form) {
        $(form).slideUp(300);
        $('#not-spam-form').hide();
        $('.form-success').removeClass('hide');
        $('.form-success').addClass('in');
    };

    $('#spam-score-form').on('submit', function(e) {
        e.preventDefault();

        var post_form = function(form) {
            var config = {
                form: form,
                url: form.attr('action'),
                data: form.serialize()
            };

            var jqxhr = $.ajax({
                type: 'POST',
                url: config.url,
                data: config.data,

                complete: function() {
                    if ($('#report-spam-modal').length > 0) {
                        $('#report-spam-modal').modal('hide');
                        $('#report-button').hide();
                        $('#report-success').show();
                    } else {
                        display_message($(config.form));
                    }

                    setTimeout(updateSpamComments, 500);
                    if ($('#report-count')) {
                        var reports = parseInt($('#report-count').text(), 10);
                        reports = isNaN(reports) ? 0 : reports;
                        reports++;
                        $('#report-count').text(reports);
                        $('#report-count-mobile').text(reports);
                    }
                }
            });
        };

        if (WPR.empty_field_validation($(this))) {
            post_form($(this));
        }
    });

    $('#not-spam-form').on('submit', function(e) {
        e.preventDefault();
        var form = $('#not-spam-form');
        var config = {
            form: form,
            url: form.attr('action'),
            data: form.serialize()
        };

        $.ajax({
            type: 'POST',
            url: config.url,
            data: config.data,
            complete: function() {
                display_message($('#spam-score-form'));
                setTimeout(updateSpamComments, 500);
                if ($('#report-count')) {
                    var reports = parseInt($('#report-count').text(), 10);
                    reports = isNaN(reports) ? 0 : reports;
                    reports++;
                    $('#report-count').text(reports);
                    $('#report-count-mobile').text(reports);
                }
            }
        }).always(function() {
            config.form.hide();
            setTimeout(updateSpamComments, 500);
        });
    });

    updateSpamComments();
});