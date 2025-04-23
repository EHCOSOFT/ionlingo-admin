$(document).ready(function () {
    // ==============================
    // 공통 레이아웃 삽입 (사이드바 / 푸터 / 네비게이션)
    // ==============================
    $("#sidebar").append(Sidebar());
    $("#footer").append(Footer());
    $("#navbar").append(Navbar());

    // ==============================
    // 사이드바 토글 이벤트
    // ==============================
    $(document).on("click", ".sidebar-toggle", function () {
        $("#sidebar").toggleClass("collapsed");
    });

    // ==============================
    // Sidebar 컴포넌트
    // ==============================
    function Sidebar() {
        return `
            <div class="sidebar-content js-simplebar" data-simplebar>
				<a class="sidebar-brand" href="대시보드.html">
					<img src="img/logo.svg" alt="아이오엔링고">
				</a>

				<ul class="sidebar-nav">
					<li class="sidebar-item">
						<a class="sidebar-link" href="대시보드.html">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="home" class="lucide lucide-layout align-middle">
								<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
								<polyline points="9 22 9 12 15 12 15 22"></polyline>
							</svg>
							<span class="align-middle">Dashboard</span>
						</a>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#engine-manage" data-bs-toggle="collapse" class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="power" class="lucide lucide-layout align-middle">
								<path d="M12 2v10"></path>
								<path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path>
							</svg>
							<span class="align-middle">엔진관리</span>
						</a>
						<ul id="engine-manage" class="sidebar-dropdown list-unstyled collapse"
							data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="엔진관리_엔진모니터링.html">엔진 모니터링</a>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#model-manage" data-bs-toggle="collapse" class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="cloud" class="lucide lucide-layout align-middle">
								<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
							</svg>
							<span class="align-middle">모델관리</span>
						</a>
						<ul id="model-manage" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="모델관리_모델설정.html">모델 설정</a>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#service-manage" data-bs-toggle="collapse" class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="server" class="lucide lucide-layout align-middle">
								<rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
								<rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
								<line x1="6" x2="6.01" y1="6" y2="6"></line>
								<line x1="6" x2="6.01" y1="18" y2="18"></line>
							</svg>
							<span class="align-middle">서비스 관리</span>
						</a>
						<ul id="service-manage" class="sidebar-dropdown list-unstyled collapse"
							data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="서비스관리_서비스설정.html">서비스 설정</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="서비스관리_서비스시나리오.html">서비스 시나리오</a>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#knowledge-group-manage" data-bs-toggle="collapse"
							class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="copy" class="lucide lucide-layout align-middle">
								<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
								<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
							</svg>
							<span class="align-middle">지식 그룹 관리</span>
						</a>
						<ul id="knowledge-group-manage" class="sidebar-dropdown list-unstyled collapse"
							data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="지식그룹관리_지식설정.html">지식 설정</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="지식그룹관리_프롬프트관리.html">프롬프트 관리</a>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#knowledge-date-manage" data-bs-toggle="collapse"
							class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="database"
								class="lucide lucide-layout align-middle">
								<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
								<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
								<path d="M3 12A9 3 0 0 0 21 12"></path>
							</svg>
							<span class="align-middle">지식데이터 관리</span>
						</a>
						<ul id="knowledge-date-manage" class="sidebar-dropdown list-unstyled collapse"
							data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="지식데이터관리_지식파일관리.html">지식 파일 관리</a>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#dictionary-manage" data-bs-toggle="collapse" class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="book-open"
								class="lucide lucide-layout align-middle">
								<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
								<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
							</svg>
							<span class="align-middle">사전 관리</span>
						</a>
						<ul id="dictionary-manage" class="sidebar-dropdown list-unstyled collapse"
							data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="사전관리_신조어사전.html">신조어 사전</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="사전관리_동의어사전.html">동의어 사전</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="사전관리_불용어사전.html">불용어 사전</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="사전관리_금칙어사전.html">금칙어 사전</a>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#chat-manage" data-bs-toggle="collapse" class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="message-circle"
								class="lucide lucide-layout align-middle">
								<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
							</svg>
							<span class="align-middle">대화 관리</span>
						</a>
						<ul id="chat-manage" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="대화관리_미식별질의목록.html">미식별 질의 목록</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="대화관리_대화목록.html">대화 목록</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="대화관리_채팅로그.html">채팅로그</a>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#evaluation-manage" data-bs-toggle="collapse" class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="zap" class="lucide lucide-layout align-middle">
								<path
									d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
								</path>
							</svg>
							<span class="align-middle">평가 관리</span>
						</a>
						<ul id="evaluation-manage" class="sidebar-dropdown list-unstyled collapse"
							data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="평가관리_정답셋관리.html">정답셋 관리</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="평가관리_품질테스트.html">품질 테스트</a>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#log-analysis" data-bs-toggle="collapse" class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="activity"
								class="lucide lucide-layout align-middle">
								<path
									d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2">
								</path>
							</svg>
							<span class="align-middle">로그 분석</span>
						</a>
						<ul id="log-analysis" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="로그분석_엔진로그.html">엔진 로그</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="로그분석_임베딩로그.html">임베딩 로그</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="로그분석_시스템로그.html">시스템 로그</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="로그분석_사용자로그.html">사용자 로그</a>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#usage-stats" data-bs-toggle="collapse" class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="pie-chart"
								class="lucide lucide-layout align-middle">
								<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
								<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
							</svg>
							<span class="align-middle">이용 통계</span>
						</a>
						<ul id="usage-stats" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="이용통계_사용자통계.html">사용자 통계</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="이용통계_대화통계.html">대화 통계</a>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<a data-bs-target="#system-manage" data-bs-toggle="collapse" class="sidebar-link collapsed">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" data-lucide="settings"
								class="lucide lucide-layout align-middle">
								<path
									d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
								</path>
								<circle cx="12" cy="12" r="3"></circle>
							</svg>
							<span class="align-middle">시스템 관리</span>
						</a>
						<ul id="system-manage" class="sidebar-dropdown list-unstyled collapse"
							data-bs-parent="#sidebar">
							<li class="sidebar-item">
								<a class="sidebar-link" href="시스템관리_사용자관리.html">사용자 관리</a>
							</li>
							<li class="sidebar-item">
								<a class="sidebar-link" href="시스템관리_메뉴관리.html">메뉴 관리 </a>
							</li>
						</ul>
					</li>

				</ul>
			</div>
            `
    };


    // ==============================
    // Footer 컴포넌트
    // ==============================
    function Footer() {
        return `
            <div class="container-fluid">
                <div class="row text-muted">
                    <div class="col-6 text-start">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a class="text-muted" href="#">Mayfarmsoft</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 text-end">
                        <p class="mb-0">&copy; 2025</p>
                    </div>
                </div>
            </div>
            `
    };


    // ==============================
    // Navbar 컴포넌트
    // ==============================
    function Navbar() {
        return `
            <a class="sidebar-toggle">
                <i class="hamburger align-self-center"></i>
            </a>
            <div class="navbar-right">
                <div class="navbar-info">
                    <h4>Admin Name 1</h4>
                    <p>시스템 관리자</p>
                </div>
                <button type="button" class="btn btn-secondary">로그아웃</button>
            </div>
            `
    };


    // ==============================
    // 전역 확인용 모달 생성 함수 (재사용)
    // ==============================
    function createGlobalModal() {
        const modalHTML = `
            <div class="modal fade" id="globalConfirmModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">기본 제목</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="닫기"></button>
                        </div>
                        <div class="modal-body m-3">
                            <p class="mb-0">기본 안내 문구</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary modal-confirm-btn">확인</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $("body").append(modalHTML);
    }

    // 페이지 로딩 시 전역 모달 1회 생성
    createGlobalModal();

    // ==============================
    // 전역 확인 모달: 버튼 클릭 시 모달 오픈 및 커스텀 버튼 처리
    // ==============================
    $(document).on("click", ".modal-trigger-btn", function () {
        // 제목/본문 데이터 속성 가져오기
        const title = $(this).data("modal-title") || "알림";
        let body = $(this).attr("data-modal-body") || "정말로 진행하시겠습니까?";
        body = body.replace(/\n/g, "<br>"); // 줄바꿈 처리

        // 버튼 정보 JSON 파싱
        const buttons = JSON.parse($(this).attr("data-modal-buttons") || "[]");

        // 모달 제목 및 본문 삽입
        $("#globalConfirmModal .modal-title").text(title);
        $("#globalConfirmModal .modal-body p").html(body);

        const $footer = $("#globalConfirmModal .modal-footer");
        $footer.empty(); // 기존 버튼 제거

        // 버튼 동적 생성 및 이벤트 연결
        buttons.forEach((btn) => {
            const $btn = $("<button></button>")
                .addClass("btn")
                .addClass(btn.class || "btn-primary")
                .text(btn.text || "확인");

            // 닫기 동작이 있는 경우
            if (btn.dismiss) {
                $btn.attr("data-bs-dismiss", "modal");
            }

            // 콜백 함수 지정 시 실행
            if (btn.callback && typeof window[btn.callback] === "function") {
                $btn.on("click", function () {
                    window[btn.callback](); // 외부 정의된 함수 실행
                });
            }

            $footer.append($btn); // 버튼 추가
        });

        // 모달 표시
        const modal = new bootstrap.Modal(document.getElementById("globalConfirmModal"));
        modal.show();
    });


    // ==============================
    // [전역] 알림 모달 (단순 메시지용)
    // ==============================
    function showAlertModal(message, onConfirm) {
        // 모달이 아직 없는 경우 생성
        if ($("#alertModal").length === 0) {
            const modalHtml = `
            <div class="modal fade" id="alertModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content" style="z-index: 1056;">
                        <div class="modal-body m-3">
                            <p class="mb-0"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">확인</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                        </div>
                    </div>
                </div>
            </div>`;
            $("body").append(modalHtml);
        }

        const $modal = $("#alertModal");

        // 메시지 설정
        $modal.find(".modal-body p").text(message);

        // 확인 버튼에 콜백 함수 연결 (기존 이벤트 제거 후 재설정)
        $modal.find(".btn-primary").off("click").on("click", function () {
            if (typeof onConfirm === "function") {
                onConfirm();
            }
            $modal.modal("hide");
        });

        // 모달 열기
        $modal.modal("show");
    }

    // ==============================
    // alertModal 전용 처리] 다중 모달 대응
    // ==============================

    /*
        - Bootstrap에서는 여러 모달을 동시에 사용할 때, 
        `modal-backdrop`의 z-index가 겹치거나 뒤로 가는 문제 발생 가능
        - 아래 로직은 alertModal이 열릴 때만 z-index를 수동 조정하여 항상 최상단에 보이도록 처리
    */

    // alertModal이 열릴 때
    $(document).on("shown.bs.modal", "#alertModal", function () {
        // 마지막 modal-backdrop의 z-index를 높여 alertModal 배경을 위로 보이게 함
        $(".modal-backdrop").last().css("z-index", 1055);
    });

    // alertModal이 닫힐 때
    $(document).on("hidden.bs.modal", "#alertModal", function () {
        // 해당 모달의 backdrop z-index 초기화 (다른 모달 동작에 영향 방지)
        $(".modal-backdrop").last().css("z-index", ""); // 초기화 (선택 사항)
    });

    // ==============================
    // [전역] 이벤트
    // ==============================

    /* ------------------------------
    ✅ 전체 선택 체크박스 클릭 시
    - 같은 테이블 안의 모든 .check-row 항목을 체크/해제
    -------------------------------- */
    $(document).on("change", ".check-all", function () {
        const isChecked = $(this).is(":checked");
        const table = $(this).closest("table");

        table.find(".check-row").prop("checked", isChecked);
    });

    /* ------------------------------
    ✅ 개별 체크박스 클릭 시
    - 전체 체크 여부에 따라 .check-all 상태 동기화
    -------------------------------- */
    $(document).on("change", ".check-row", function () {
        const table = $(this).closest("table");
        const total = table.find(".check-row").length;
        const checked = table.find(".check-row:checked").length;

        table.find(".check-all").prop("checked", total === checked);
    });

    /* ------------------------------
    ✅ input[name="datesingle"] 에 datepicker 적용
    - 단일 날짜만 선택 (singleDatePicker: true)
    - 연/월 선택 드롭다운 표시 (showDropdowns: true)
    -------------------------------- */
    $("input[name=\"datesingle\"]").daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    });










    // ==============================
    // 지식 관리 > 지식 설정 > 지식 등록 이미지 파일 업로드 미리보기
    // ==============================

    /* ------------------------------
       ✅ "파일 업로드" 버튼 클릭 시
       - 동일 그룹 내의 input[type="file"] 클릭 트리거
    -------------------------------- */
    $(document).on("click", ".btn-file-upload", function () {
        const $group = $(this).closest(".file-img-area");
        $group.find(".file-input").click();
    });

    /* ------------------------------
       ✅ 파일 선택(change) 시 이미지 미리보기
       - 이미지 파일만 허용
       - 미리보기를 배경 이미지로 표시
    -------------------------------- */
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
                    .fadeIn(); // ✅ 미리보기 표시
            };
            reader.readAsDataURL(file);
        } else {
            alert("이미지 파일만 업로드할 수 있습니다.");
            $(this).val(""); // 입력 초기화
            $preview.hide(); // 미리보기 숨김
        }
    });









    // ==============================
    // 서비스관리 > 서비스 설정 > 서비스 수정
    // ==============================

    /* ------------------------------
    ✅ 서비스 중복 검사 버튼 클릭
    - 서비스명이 없으면 경고 모달
    - 예시로 "test"는 중복된 것으로 처리
    - 사용 가능하면 확인 후 콜백 실행 가능
    -------------------------------- */
    $(document).on("click", ".btn-check-service-name", function () {
        const userId = $("input[name='server-name']").val().trim();

        if (!userId) {
            showAlertModal("서비스명을 입력해주세요.");
            return;
        }

        // ✨ 여기서 실제 중복검사 로직 넣기 (예: 서버 요청)
        // 예시: "test" 라는 서비스는 중복된 걸로 간주
        if (userId === "test") {
            showAlertModal("이미 사용 중인 서비스명입니다.");
        } else {
            showAlertModal("사용 가능한 서비스명입니다.", function () {
                console.log("확인 버튼 눌림 - 이후 로직 진행 가능");
            });
        }
    });

    $(document).on("click", ".btn-check-service-id", function () {
        const userId = $("input[name='server-id']").val().trim();

        if (!userId) {
            showAlertModal("서비스 아이디를 입력해주세요.");
            return;
        }

        // ✨ 여기서 실제 중복검사 로직 넣기 (예: 서버 요청)
        // 예시: "test" 라는 서비스는 중복된 걸로 간주
        if (userId === "test") {
            showAlertModal("서비스 아이디는 공백과 특수문자를 제외한 10자 이하의 대소문자와 숫자만 입력 가능합니다.");
        } else {
            showAlertModal("사용 가능한 서비스 아이디입니다.", function () {
                console.log("확인 버튼 눌림 - 이후 로직 진행 가능");
            });
        }
    });







    // ==============================
    // 서비스관리 > 서비스 시나리오 - 동적 필드 추가/삭제 처리
    // ==============================

    /* ------------------------------
    ✅ 카테고리 추가
    - Radio 사용 여부 OFF 선택 시 알림 표시
    -------------------------------- */
    $(document).on("change", "input[name='category-situation']", function () {
        if ($(this).val() === "off") {
            showAlertModal("off 설정을 하면 해당 카테고리의 메뉴가 비노출 처리되며 카테고리에 설정한 시나리오로 채팅을 진행할 수 없게 됩니다. 정말 사용을 off 하시겠습니까?");
        }
    });


    /* ------------------------------
    ✅ 모델 멀티턴 답변 추가 버튼 클릭
    - 최대 5개까지 링크 필드 추가 가능
    -------------------------------- */
    $(".input-group-field").on("click", ".btn-add-multiton-link", function () {
        const $container = $(this).closest(".input-group-field"); // 각자의 필드 기준
        const $fields = $container.find(".d-flex.gap-1");
        const maxCount = 5;

        if ($fields.length >= maxCount) {
            showAlertModal("답변 링크는 5개 까지만 추가 가능합니다.");
            return;
        }

        const newField = `
        <div class="d-flex gap-1 mt-1">
            <input type="text" class="form-control" name="" placeholder="버튼명 입력" value="">
            <input type="text" class="form-control" name="" placeholder="링크 입력" value="">
            <button type="button" class="btn-remove-multiton-link btn btn-outline-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" data-lucide="minus"
                    class="lucide lucide-minus align-middle">
                    <path d="M5 12h14"></path>
                </svg>
            </button>
        </div>
    `;

        $container.append(newField);
    });

    /* ------------------------------
    ✅ 모델 멀티턴 링크 삭제 버튼
    -------------------------------- */
    $(".input-group-field").on("click", ".btn-remove-multiton-link", function () {
        $(this).closest(".d-flex.gap-1").remove();
    });

    /* ------------------------------
    ✅ 모델 싱글턴 답변 추가 버튼 클릭
    - 최대 5개까지 링크 필드 추가 가능
    -------------------------------- */
    $(".input-group-field").on("click", ".btn-add-single-link", function () {
        const $container = $(this).closest(".input-group-field"); // 각자의 필드 기준
        const $fields = $container.find(".d-flex.gap-1");
        const maxCount = 5;

        if ($fields.length >= maxCount) {
            showAlertModal("답변 링크는 5개 까지만 추가 가능합니다.");
            return;
        }

        const newField = `
        <div class="d-flex gap-1 mt-1">
            <input type="text" class="form-control" name="" placeholder="버튼명 입력" value="">
            <input type="text" class="form-control" name="" placeholder="링크 입력" value="">
            <button type="button" class="btn-remove-single-link btn btn-outline-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" data-lucide="minus"
                    class="lucide lucide-minus align-middle">
                    <path d="M5 12h14"></path>
                </svg>
            </button>
        </div>
    `;

        $container.append(newField);
    });

    /* ------------------------------
    ✅ 모델 싱글턴 링크 삭제 버튼
    -------------------------------- */
    $(".input-group-field").on("click", ".btn-remove-multiton-link", function () {
        $(this).closest(".d-flex.gap-1").remove();
    });

    /* ------------------------------
    ✅ IO-SCRIPT 추가 버튼 클릭
    - 최대 5개까지 파라미터 필드 추가 가능
    -------------------------------- */
    $(".input-group-field").on("click", ".btn-add-io-script", function () {
        const $container = $(this).closest(".input-group-field");
        const $fields = $container.find(".d-flex.gap-1");
        const maxCount = 5;

        if ($fields.length >= maxCount) {
            showAlertModal("파라미터는 최대 5개 까지만 추가 가능합니다.");
            return;
        }

        const newField = `
        <div class="d-flex gap-1 mt-1">
            <input type="text" class="form-control" name="" placeholder="PARAMETER명을 입력해주세요." value="">
            <input type="text" class="form-control" name="" placeholder="기본값을 입력해 주세요." value="">
            <button type="button" class="btn-remove-io-script btn btn-outline-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" data-lucide="minus"
                    class="lucide lucide-minus align-middle">
                    <path d="M5 12h14"></path>
                </svg>
            </button>
        </div>
    `;

        $container.append(newField);
    });

    /* ------------------------------
    ✅ IO-SCRIPT 삭제 버튼
    -------------------------------- */
    $(".input-group-field").on("click", ".btn-remove-io-script", function () {
        $(this).closest(".d-flex.gap-1").remove();
    });

    /* ------------------------------
    ✅ 지식 추가 버튼 클릭 (힌트 질의)
    - 최대 5개까지 입력 가능
    -------------------------------- */
    $(".input-group-field").on("click", ".btn-add-knowledge", function () {
        const $container = $(this).closest(".input-group-field");
        const $fields = $container.find(".d-flex.gap-1");
        const maxCount = 5;

        if ($fields.length >= maxCount) {
            showAlertModal("힌트 질의는 5개 까지만 추가 가능합니다.");
            return;
        }

        const newField = `
        <div class="d-flex gap-1 mt-1">
            <input type="text" class="form-control" name="" placeholder="공백 포함 200자 제한" value="" maxlength="200">
            <button type="button" class="btn-remove-knowledge btn btn-outline-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" data-lucide="minus"
                    class="lucide lucide-minus align-middle">
                    <path d="M5 12h14"></path>
                </svg>
            </button>
        </div>
    `;

        $container.append(newField);
    });

    /* ------------------------------
    ✅ 지식 삭제 버튼
    -------------------------------- */
    $(".input-group-field").on("click", ".btn-remove-knowledge", function () {
        $(this).closest(".d-flex.gap-1").remove();
    });










    // ==============================
    // 시스템관리 > 사용자 관리 > 사용자 추가/수정
    // ==============================

    /* ------------------------------
    ✅ 아이디 중복 검사 버튼 클릭
    - 아이디가 없으면 경고 모달
    - 예시로 "test"는 중복된 것으로 처리
    - 사용 가능하면 확인 후 콜백 실행 가능
    -------------------------------- */
    $(document).on("click", ".btn-check-duplicate", function () {
        const userId = $("input[name='user-id']").val().trim();

        if (!userId) {
            showAlertModal("아이디를 입력해주세요.");
            return;
        }

        // ✨ 여기서 실제 중복검사 로직 넣기 (예: 서버 요청)
        // 예시: "test" 라는 아이디는 중복된 걸로 간주
        if (userId === "test") {
            showAlertModal("이미 사용 중인 아이디입니다.");
        } else {
            showAlertModal("사용 가능한 아이디입니다.", function () {
                console.log("확인 버튼 눌림 - 이후 로직 진행 가능");
            });
        }
    });










    // ==============================
    // 시스템관리 > 메뉴관리
    // ==============================

    // ==============================================
    // [시스템관리 > 메뉴관리] 상단 메뉴 제목 클릭 시 하위 메뉴 토글 제어
    // ==============================================
    $(document).on("click", ".sub-tab-toggle", function () {
        const $clickedToggle = $(this); // 현재 클릭된 상단 메뉴 (.sub-tab-toggle)
        const $currentItem = $clickedToggle.closest(".list-group-item"); // 해당 메뉴를 감싸는 부모 요소
        const $currentSubMenu = $currentItem.find(".sub-tab-list"); // 현재 클릭된 메뉴의 하위 목록

        // --------------------------------------------------
        // STEP 1. 다른 열려있는 하위 메뉴는 닫고 active 제거
        // --------------------------------------------------
        $(".sub-tab-list:visible").not($currentSubMenu).each(function () {
            const $menu = $(this);
            $menu.slideUp(200); // 다른 메뉴 닫기
            $menu.closest(".list-group-item").find(".sub-tab-toggle").addClass("collapsed"); // 닫힌 표시
            $menu.find(".list-group-item.active").removeClass("active"); // 하위 메뉴에 active 있으면 제거
        });

        // --------------------------------------------------
        // STEP 2. 현재 클릭한 메뉴 열기 or 닫기 처리
        // --------------------------------------------------
        if ($currentSubMenu.is(":visible")) {
            // 이미 열려있으면 → 닫기
            $currentSubMenu.slideUp(200);
            $clickedToggle.addClass("collapsed"); // 닫힌 상태 표시
            $currentSubMenu.find(".list-group-item.active").removeClass("active"); // 본인 하위 active 제거
        } else {
            // 닫혀있으면 → 열기
            $currentSubMenu.slideDown(200);
            $clickedToggle.removeClass("collapsed"); // 열린 상태로 표시
        }
    });

    // ==============================
    // 메뉴 템플릿 목록 (권한별 메뉴 목록을 동적으로 표시)
    // ==============================
    const menuTemplates = {
        service: `
            <div class="list-group-item">
                <a href="#" class="sub-tab-toggle collapsed">Dashboards</a>
                <div class="list-group sub-tab-list">
                    <a href="#" class="list-group-item menu-item" data-detail-id="service-dashboard">Dashboard</a>
                </div>
            </div>
            <div class="list-group-item">
                <a href="#" class="sub-tab-toggle collapsed">모델관리</a>
                <div class="list-group sub-tab-list">
                    <a href="#" class="list-group-item menu-item" data-detail-id="service-model">모델 설정</a>
                </div>
            </div>
        `,
        system: `
            <div class="list-group-item">
                <a href="#" class="sub-tab-toggle collapsed">Dashboards</a>
                <div class="list-group sub-tab-list">
                    <a href="#" class="list-group-item menu-item" data-detail-id="service-dashboard">Dashboard</a>
                </div>
            </div>
            <div class="list-group-item">
                <a href="#" class="sub-tab-toggle collapsed">모델관리</a>
                <div class="list-group sub-tab-list">
                    <a href="#" class="list-group-item menu-item" data-detail-id="service-model">모델 설정</a>
                </div>
            </div>
            <div class="list-group-item">
                <a href="#" class="sub-tab-toggle collapsed">서비스 관리</a>
                <div class="list-group sub-tab-list">
                    <a href="#" class="list-group-item menu-item" data-detail-id="system-log">서비스 설정</a>
                    <a href="#" class="list-group-item menu-item" data-detail-id="system-log">서비스 시나리오</a>
                </div>
            </div>
        `,
        tester: `
            <div class="list-group-item">
                <a href="#" class="sub-tab-toggle collapsed">시스템</a>
                <div class="list-group sub-tab-list">
                    <a href="#" class="list-group-item menu-item" data-detail-id="system-log">시스템 로그</a>
                </div>
            </div>
        `
    };

    // ==============================
    // 공통 폼 템플릿 (동일한 구조, value만 변경)
    // ==============================
    const formTemplate = `
        <form id="dynamicForm" novalidate>
            <div class="input-group mb-3">
                <label class="form-label">상위 메뉴명</label>
                <input type="text" class="form-control" name="parent-menu-name" value="">
            </div>
            <div class="input-group mb-3">
                <label class="form-label">메뉴 명</label>
                <input type="text" class="form-control" name="menu-name" value="">
            </div>
            <div class="input-group mb-3">
                <label class="form-label">메뉴 유형</label>
                <input type="text" class="form-control" name="menu-category" value="">
            </div>
            <div class="input-group mb-3">
                <label class="form-label">URL</label>
                <input type="text" class="form-control" name="menu-url" value="">
            </div>
            <div class="input-group mb-3">
                <label class="form-label">메뉴 표시하기</label>
                <label class="form-check me-4">
                    <input name="menu-visibility" type="radio" class="form-check-input" value="On" checked>
                    <span class="form-check-label">On</span>
                </label>
                <label class="form-check">
                    <input name="menu-visibility" type="radio" class="form-check-input" value="Off">
                    <span class="form-check-label">Off</span>
                </label>
            </div>
        </form>
        `;

    // ==============================
    // 메뉴별 기본 값 매핑
    // 메뉴 클릭 시 formTemplate에 이 값들이 채워짐
    // ==============================
    const formValues = {
        'service-dashboard': {
            'parent-menu-name': 'Dashboard',
            'menu-name': 'Dashboard',
            'menu-category': 'Sys',
            'menu-url': '/admin/Dashboards/dashboard',
            'menu-visibility': 'On'
        },
        'service-model': {
            'parent-menu-name': '모델관리',
            'menu-name': '모델 설정',
            'menu-category': 'Sys',
            'menu-url': '/admin/model/setting',
            'menu-visibility': 'Off'
        },
        'system-log': {
            'parent-menu-name': '시스템',
            'menu-name': '시스템 로그',
            'menu-category': 'Sys',
            'menu-url': '/admin/system/log',
            'menu-visibility': 'On'
        }
    };

    // ==============================
    // [이벤트] 권한 선택 시 메뉴 리스트 변경
    // ==============================
    $(document).on("click", ".authority-tabs .list-group-item", function (e) {
        e.preventDefault();
        const role = $(this).data("role");

        // 권한별 메뉴 템플릿 삽입
        $(".menu-list-wrap").html(menuTemplates[role] || "");

        // 기존 폼 초기화
        $(".menu-detail-wrap").empty();
    });

    // ==============================
    // [이벤트] 메뉴 클릭 시 폼 표시 + 값 주입
    // ==============================
    $(document).on("click", ".menu-item", function (e) {
        e.preventDefault();
        const detailId = $(this).data("detail-id");

        // 폼 템플릿 삽입
        $(".menu-detail-wrap").html(formTemplate);

        // 값 매핑
        const values = formValues[detailId];
        if (values) {
            for (const [name, value] of Object.entries(values)) {
                const $input = $(`[name="${name}"]`);
                if ($input.attr("type") === "radio") {
                    $input.prop("checked", false);
                    $input.filter(`[value="${value}"]`).prop("checked", true);
                } else {
                    $input.val(value);
                }
            }
        }
    });










    // ==============================
    // 시스템관리 > 메뉴 권한 설정 기능
    // ==============================
    /* ------------------------------
    ✅ 메뉴 권한 라디오 버튼(menu-author) 선택 시 하위 메뉴 제어
    - 전체 활성화 → 모든 메뉴 On
    - 전체 비활성화 → 모든 메뉴 Off
    - 메뉴별 활성화 → 아무 것도 자동 선택 안함
    -------------------------------- */
    $(document).on("change", "input[name='menu-author']", function () {
        const value = $(this).next(".form-check-label").text().trim();

        // 모든 하위 메뉴 그룹 순회
        $(".menu-visibility-group").each(function () {
            const groupName = $(this).data("group");
            const $onInput = $(`input[name='${groupName}-visibility'][value='On']`);
            const $offInput = $(`input[name='${groupName}-visibility'][value='Off']`);

            if (value === "전체 활성화") {
                $onInput.prop("checked", true);
            } else if (value === "전체 비활성화") {
                $offInput.prop("checked", true);
            } else {
                // 메뉴별 활성화 → 아무것도 안함
            }
        });
    });









    // ==============================
    // 지식데이터관리 > 지식파일관리
    // ==============================

    /* ------------------------------
    ✅ 파일 업로드 드래그 & 드롭 처리(다중처리)
    - 클릭 시 파일 선택창 열기
    - 드래그 진입 시 스타일 변경
    - 드래그 나갈 때 스타일 초기화
    - 드롭 시 파일 등록 처리 + 파일명 표시
    -------------------------------- */

    const $fileGroup = $(".file-group");
    const $fileInput = $("#fileUpload");
    const $filePreview = $(".file-preview");

    // 📍 클릭 시 input[type="file"] 열기
    $fileGroup.on("click", function () {
        $fileInput.trigger("click");
    });

    // 📍 드래그 요소 위로 올렸을 때
    $fileGroup.on("dragover", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass("dragover");
    });

    // 📍 드래그 요소가 벗어났을 때
    $fileGroup.on("dragleave", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass("dragover");
    });

    // 📍 파일 드롭 시
    $fileGroup.on("drop", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass("dragover");

        const files = e.originalEvent.dataTransfer.files;

        if (files.length > 0) {
            // input 요소의 파일 리스트를 수동으로 할당할 수는 없음 (보안 제한 있음)
            // 따라서 fileInput의 change 이벤트를 트리거하는 방식으로 처리하거나 미리보기만 업데이트
            const fileNames = Array.from(files).map(file => file.name).join(", ");
            $filePreview.text(`선택된 파일: ${fileNames}`);
        }
    });

    // 📍 input으로 직접 선택한 경우 처리
    $fileInput.on("change", function () {
        const files = this.files;

        if (files.length > 0) {
            const fileNames = Array.from(files).map(file => file.name).join(", ");
            $filePreview.text(`업로드 파일: ${fileNames}`);
        }
    });
});