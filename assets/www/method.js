$(function(){
	$("#username").blur(function(){
	
		if($("#username").val().length==0){
			$("#usernameSpan").text("名称不能为空可用！").css("color","red");
			$("#regusername").val("false");
			return;
		}
	
		$.post("http://192.168.3.114:3000/getName", { name:$("#username").val()},
		   function(data){
				if(data=="ok"){
					$("#usernameSpan").text("名称可用").css("color","black");
					$("#regusername").val("true");
				}else if(data=="notOk"){
					$("#usernameSpan").text("名称已被用").css("color","red");
					$("#regusername").val("false");
				}else{
					$("#usernameSpan").text("系统异常，清扫后再试！").css("color","red");
					$("#regusername").val("false");
				}
		   },"text");
	});
	
	$("#password").blur(function(){
	
		if($("#password").val().length==0){
			$("#passwordSpan").text("密码不能为空！").css("color","red");
			$("#regpassword").val("false");
			return;
		}else{
			$("#passwordSpan").text("密码可用").css("color","black");
			$("#regpassword").val("true");
		}
	});
	
	$("#password-repeat").blur(function(){
	
		if($("#password-repeat").val().length==0){
			$("#repeatSpan").text("密码不能为空！").css("color","red");
			$("#regrepeat").val("false");
			return;
		}else{
			if($("#password").val()!=$("#password-repeat").val()){
				$("#regrepeat").val("false");
				$("#repeatSpan").text("两次密码输入不一致！").css("color","red");
			}else{
				$("#repeatSpan").text("密码可用").css("color","black");
				$("#regrepeat").val("true");
			}
			
		}
	});
});
function regFunction(){
	if($("#regusername").val()=="true" && $("#regpassword").val()=="true" &&
		$("#regrepeat").val()=="true"){
			var username=$("#username").val();
			var password = $("#password").val();
		   $.post("http://192.168.3.114:3000/reg", { username:username,password:password},
			   function(data){
					if(data=="success"){
						location.href="index3.html";
					}else{
						alert("注册失败");
					}
			   },"text");
	};
};

function loginFunction(){
			var username=$("#usernameLogin").val();
			var password = $("#passwordLogin").val();
		   $.post("http://192.168.3.114:3000/login", { username:username,password:password},
			   function(data){
					if(data=="success"){
						location.href="index3.html";
					}else{
						alert("系统异常，请稍候再试");
					}
			   },"text");
};


