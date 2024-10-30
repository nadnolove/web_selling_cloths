document.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử modal
    var modal = document.getElementById("modal");

    // Lấy nút mở modal
    var openModalBtn = document.getElementById("openModal");

    // Lấy phần tử đóng modal (dấu X)
    var closeModalBtn = document.getElementById("closeModal");

    // Khi người dùng bấm vào nút "Đăng ký", mở modal
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Khi người dùng bấm vào dấu X, đóng modal
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Khi người dùng click ngoài modal, đóng modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử modal đăng nhập
    var loginModal = document.getElementById("loginModal");

    // Lấy nút mở modal đăng nhập
    var openLoginModalBtn = document.getElementById("openLoginModal");

    // Lấy phần tử đóng modal đăng nhập (dấu X)
    var closeLoginModalBtn = document.getElementById("closeLoginModal");

    // Khi người dùng bấm vào nút "Đăng nhập", mở modal đăng nhập
    if (openLoginModalBtn) {
        openLoginModalBtn.onclick = function() {
            loginModal.style.display = "block";
        };
    }

    // Khi người dùng bấm vào dấu X, đóng modal đăng nhập
    if (closeLoginModalBtn) {
        closeLoginModalBtn.onclick = function() {
            loginModal.style.display = "none";
        };
    }

    // Khi người dùng click ngoài modal, đóng modal đăng nhập
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    };

    // Các mã liên quan đến modal đăng ký
    var registerModal = document.getElementById("modal");
    var openRegisterModalBtn = document.getElementById("openModal");
    var closeRegisterModalBtn = document.getElementById("closeModal");

    if (openRegisterModalBtn) {
        openRegisterModalBtn.onclick = function() {
            registerModal.style.display = "block";
        };
    }

    if (closeRegisterModalBtn) {
        closeRegisterModalBtn.onclick = function() {
            registerModal.style.display = "none";
        };
    }

    window.onclick = function(event) {
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    };
});