function func() {
  console.log(this); // 브라우저에서는 window 객체
}

func();
