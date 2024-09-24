import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri: 'http://10.13.10.5/' }}
    />
  );
}
