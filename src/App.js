import React, { Component } from 'react';
import axios from'axios';
import logo from './logo.svg';
import './App.scss';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      getData: []
    }
  }

  // https://github.com/airbnb-clone/airbnb/blob/master/client/src/index.jsx
  
  // handleClick(e) {
  //   if (this.validate() && this.state.agreePolicy && !this.state.isInProgress) {
  //       if (this.props.article) {
  //           const eventCategory = EventCategory.EventCategoryUtilities.getArticleDetailEventCategory(EventCategory.ArticleDetailEventCategory.ClickContact_Complete, this.props.article.originArticleType, this.props.article.isStoreTrade);
  //           WebTracker.TrackEvent(eventCategory, EventCategory.EventType.Click);
  //           //EventCategory.FacebookPixelUtilities.TrackEventArticleV2Content(EventCategory.FacebookPixelEvent.ClickContact, this.props.article);
  //           //WebTracker.TrackAceCounterForWeb(EventCategory.ConversionArticleDetailContactOpenEventCategory.Web_Article_Contact, eventCategory);
  //       }

  //       if (this.props.pinpointAttributes) {
  //           WebTracker.Pinpoint(EventCategory.PinpointEventType.ScreenClick, {
  //               ...EventCategory.EventAttributeUtilities.setAttributeScreenName(this.props.pinpointAttributes),
  //               button_name: EventCategory.DetailButtonName.ContactComplete,
  //               dialog_name: ""
  //           });
  //       }

  //       this.state.isInProgress = true;
  //       this.setState(this.state, () => {
  //           ServiceClients.ArticleServiceClient.Inquiry(this.props.articleId, this.state.form).then(
  //               (result) => {
  //                   AppBridge.Alert("담당 중개사님께 문의요청을 완료했습니다.");
  //                   this.state.isInProgress = false;
  //                   this.setState(this.state, () => {
  //                       if (!isAuthenticated) {
  //                           LocalStorageUtilities.set("LastUserPhoneNumber", this.state.form.UserPhoneNumber);
  //                       }
  //                       this.props.onClose();
  //                   });
  //               },
  //               (error) => {
  //                   this.state.isInProgress = false;
  //                   this.state.modelState = error.responseJSON;
  //                   this.setState(this.state);
  //               });
  //       });
  //   }
  // }

  getLocalstorageData(){
    // - 값 저장

    // localStorage.setItem("name", "Hello World!"); // key-value 형식으로 저장

    // - 값 불러오기

    // var userName = localStorage.getItem("name");

    // - 값 삭제

    // localStorage.removeItem("name"); // 스토리지로 부터 일치하는 아이템 삭제

    //   할당량 초과 예외 처리
    //   try {

    //     localStorage.setItem("name", "Hello World!"); // key-value 형식으로 저장

    // } catch (e) {

    //     if (e == QUOTA_EXCEEDED_ERR) {

    //     alert('할당량 초과!'); // 할당량 초과로 인하여 데이터를 저장할 수 없음

    //     }

    // }

    // 브라우저에서 localStorage를 지원하는지 체크.

    // if (typeof(localStorage) == 'undefined' )
    //     alert('당신의 브라우저는 HTML5 localStorage 를 지원하지 않습니다. 브라우저를 업그레이드하세요.');
    // 또는

    // if (('localStorage' in window) && window.localStorage !== null)
    //     alert('localStorage 를 지원합니다');
    // Colored by Color Scripter
  }

  // getVisitedArticleKey() {
  //   switch (this.state.article.articleType) {
  //       case ServiceClients.ArticleType.Store:
  //           return "vsids";
  //       case ServiceClients.ArticleType.Office:
  //       default:
  //           return "voids";
  //     }
  // }

  componentDidMount() {
    this.getAxios();

  //   let isAuthenticated;
  //   if (isAuthenticated) {
  //     ServiceClients.AccountServiceClient.GetProfile().then(
  //         (result) => {
  //             this.state.form.UserPhoneNumber = result.phoneNumber;
  //             this.setState(this.state);
  //         },
  //         (error) => {
  //             console.log(error);
  //         }
  //     );
  // } else {
  //     this.state.form.UserPhoneNumber = LocalStorageUtilities.get("LastUserPhoneNumber");
  //     this.setState(this.state);
  // }
}

  getAxios(){
    axios.get(`https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_1.json`)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            id : 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="btn_area">
              {/* <button type="button" className="btn_apply" onClick={this.handleClick.bind(this)}>신청하기</button> */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
