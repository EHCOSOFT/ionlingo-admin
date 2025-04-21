
$("input[name=\"datesingle\"]").daterangepicker({
    singleDatePicker: true,
    showDropdowns: true
});

$(document).on("click", ".btn-file-upload", function () {
    // 같은 그룹 안의 file input 찾아서 클릭 트리거
    const $group = $(this).closest(".file-img-area");
    $group.find(".file-input").click();
});

$(document).on("change", ".file-input", function () {
    const file = this.files[0];
    const $area = $(this).closest(".file-img-area");
    const $preview = $area.find(".file-img");

    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
            $preview
                .css({
                    "background-image": `url(${e.target.result})`,
                    "background-size": "contain",
                    "background-repeat": "no-repeat",
                    "background-position": "center"
                })
                .fadeIn(); // show 처리
        };
        reader.readAsDataURL(file);
    } else {
        alert("이미지 파일만 업로드할 수 있습니다.");
        $(this).val(""); // 잘못된 파일 초기화
        $preview.hide();
    }
});