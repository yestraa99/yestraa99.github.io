
    window.addEventListener("load",init,false);   //윈도우 내에서 로드가 됐을 때 인잇하
    function init(){
      var idTag = document.getElementById("id");
      var pwTag = document.getElementById("pw");

      var loginBtn = window.document.getElementById("loginBtn");
      console.log(loginBtn);
      loginBtn.addEventListener("click",function(e){
        e.preventDefault();
        checkLogin();
      },false);
    }
    function checkLogin(){
      var idTag = document.getElementById("id");  //idTag에 해당문서의 id값을 가져온 것
      var idValue = idTag.value;                  //id값은 idTag가 받은 값
      var pwTag = document.getElementById("pw");
      var pwValue = pwTag.value;
      
      const ID = 'yestra';
      const PW = '9953';
      // 로그인 유효성 체크
      //1) 아이디, 비밀번호 빈문자열 체크
      // var idMsg = document.getElementById("idMsg");
      // var idMsg = document.getElementById("pwMsg");
      if(idValue.trim().length == 0){
        idMsg.innerHTML="아이디를 입력하세요!";
        idMsg.style.color = "red";
        idMsg.style.fontSize = '0.7rem';
        idMsg.style.fontWeight = 'bold';  
        // idMsg.classList.add("errmsg");      
        idMsg.classList.add("errMsg");
        idTag.focus();
        return;
      }
      if(pwValue.trim().length == 0){
        idMsg.innerHTML="";
        pwMsg.innerHTML="비밀번호를 입력하세요!";
        pwMsg.style.color = "red";
        pwMsg.style.fontSize = '0.7rem';
        pwMsg.style.fontWeight = 'bold';
        pwTag.focus();
        return;
      }
      console.log(idValue.trim(),pwValue.trim());
      //2) 회원 존재유무체크
      if(idValue.trim() == ID && pwValue.trim() == PW){
        //메인 페이지로 이동
        document.location.href = "PPmain1.html";
      }else {
        pwMsg.innerHTML="가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.";
        pwMsg.style.color = "red";
        pwMsg.style.fontSize = '0.7rem';
        psMsg.style.fontWeight = 'bold';
        pwTag.focus();
        return;
      }
    }
