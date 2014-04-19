$(function(){
    $('.image_thread_fileupload').each(function(){
        $(this).fileupload({
            formData: {
                uploader: $(this).data('uploader'),
                thread:   $(this).data('thread'),
                dir:      $(this).data('dir')
            },
            inputName: $(this).data('name'),
            previewCrop: true,
            previewMaxWidth: 180,
            previewMaxHeight: 150,
            filesContainer: $(this).closest('.uploader-container').find('.files')
        });
    });
});