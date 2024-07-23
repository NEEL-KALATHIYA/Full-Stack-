$(document).ready(function () {
    let topicCount = 0;

    $('#add-topic').click(function () {
        topicCount++;
        $('#topics-container').append(`
            <div class="form-group">
                <label for="topic-${topicCount}">Topic ${topicCount}</label>
                <input type="text" class="form-control" id="topic-${topicCount}" required>
                <div id="subtopics-container-${topicCount}"></div>
                <button type="button" class="btn btn-secondary add-subtopic" data-topic-id="${topicCount}">Add Sub-topic</button>
            </div>
        `);
    });

    $(document).on('click', '.add-subtopic', function () {
        const topicId = $(this).data('topic-id');
        const subtopicCount = $(`#subtopics-container-${topicId} .form-group`).length + 1;
        $(`#subtopics-container-${topicId}`).append(`
            <div class="form-group">
                <label for="subtopic-${topicId}-${subtopicCount}">Sub-topic ${subtopicCount}</label>
                <input type="text" class="form-control" id="subtopic-${topicId}-${subtopicCount}" required>
            </div>
        `);
    });

    $('#course-form').submit(function (e) {
        e.preventDefault();

        const course = {
            title: $('#title').val(),
            image: $('#image').val(),
            topics: [],
            seats: $('#seats').val(),
            coupon: $('#coupon').val()
        };

        $('#topics-container .form-group').each(function () {
            const topicId = $(this).find('.add-subtopic').data('topic-id');
            const topic = {
                title: $(`#topic-${topicId}`).val(),
                subtopics: []
            };

            $(`#subtopics-container-${topicId} .form-group`).each(function () {
                topic.subtopics.push($(this).find('input').val());
            });

            course.topics.push(topic);
        });

        $.ajax({
            url: 'http://localhost:3000/courses',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(course),
            success: function () {
                alert('Course created successfully!');
                $('#course-form')[0].reset();
                $('#topics-container').empty();
            },
            error: function () {
                alert('An error occurred while creating the course.');
            }
        });
    });
});
