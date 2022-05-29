// import { getApp, getApps } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useFirebase } from '../hooks/useFirebase';
import { useAuth } from '../hooks/useAuth';

interface Props {

}

const FirebaseLoginUI = ({}: Props) => {
  const { firebaseApp: app } = useFirebase();
  const { user } = useAuth();

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    // tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    // privacyPolicyUrl: function() {
    //   window.location.assign('<your-privacy-policy-url>');
    // }
    // callbacks: {
    //   // Avoid redirects after sign-in.
    //   signInSuccessWithAuthResult: () => {
    //     console.log('sign in success');
    //   },
    // },
  };

  // useEffect(() => {
  //   if (!app) return;
  //   // Initialize the FirebaseUI Widget using Firebase.
  //   const ui = new firebaseui.auth.AuthUI(app?.auth());
  //   // The start method will wait until the DOM is loaded.
  //   ui.start('#firebaseui-auth-container', uiConfig);
  // }, [ app ])
  if (!app) {
    return (
      <></>
    );
  }
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()}/>
  );
}

export default FirebaseLoginUI;