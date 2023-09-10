// D_ImportComp.js : 자식 컴포넌트
// TODO: 리액트 컴포넌트 디자인 적용하기 : css 파일 적용
// rfce
import React from 'react'
// css 파일 import 
import "../assets/D_ImportComp.css";

function D_ImportComp() {

    // TODO: 화면에 보이는 부분 
  return (
    <div>
        {/* class="" => className="" : 리액트에는 class 대신 사용함 */}
        <h2 className="dms01-h2">ImportComp</h2>
    </div>
  )
}

export default D_ImportComp