import firebase from 'react-native-firebase';

export function uploadImage(imageUri){
    return new Promise((resolve)=>{
      const ext = imageUri.split('.').pop(); 
        const filename = `${uuid4()}.${ext}`;
        firebase
          .storage()
          .ref(`users/avatars/${filename}`)
          .putFile(imageUri)
          .on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
                if (snapshot.state === firebase.storage.TaskState.SUCCESS){
                    resolve(snapshot.downloadURL)
                } 
            },
            error => {
                console.log(error.message)
            }
          );
    })
};

uuid4 = function () {
    //// return uuid of form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    var uuid = '', ii;
    for (ii = 0; ii < 32; ii += 1) {
      switch (ii) {
      case 8:
      case 20:
        uuid += '-';
        uuid += (Math.random() * 16 | 0).toString(16);
        break;
      case 12:
        uuid += '-';
        uuid += '4';
        break;
      case 16:
        uuid += '-';
        uuid += (Math.random() * 4 | 8).toString(16);
        break;
      default:
        uuid += (Math.random() * 16 | 0).toString(16);
      }
    }
    return uuid;
};