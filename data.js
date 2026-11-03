// rackscape 更新データ
// ★更新はこのファイルだけ編集すればOK。本文（HTML）は触らなくて大丈夫です。
//   日付は "2026-11-03" の形で。新しいものを配列の先頭に足すと、その順で表示されます。

// What's New（トップページと各ページ下部に表示）
const WHATS_NEW = [
 { date: "2026-11-03", label: "note", text: "開発日誌「生成AIでグルーヴボックスのWebアプリができちゃった！」を公開しました。", url: "https://note.com/rich_pipit1325/n/n57a539feefe2" },
 { date: "2026-11-03", label: "web app", text: "グルーヴボックスのWebアプリ「scatter flutter」を公開しました。", url: "studio.html" }
];

// studio の作品・リンク集（アプリ、動画、note記事など）
const STUDIO_ITEMS = [
 {
  title: "scatter flutter",
  desc: "生成AIに指示して作った、ブラウザでそのまま弾けるグルーヴボックス。無料・非公式のファンメイドです。",
  url: "app/scatter-flutter/",
  tag: "web app",
},
 {
  title: "生成AIでグルーヴボックスのWebアプリができちゃった！",
  desc: "scatter flutterの製作記。Notebookに集めた機材情報をもとに、Geminiへ指示して作った過程をnoteに書きました。",
  url: "https://note.com/rich_pipit1325/n/n57a539feefe2",
  tag: "note",
},
];

// share の紹介リスト（みんなの棚）
const SHARE_ITEMS = [
  {
    title: "紹介はこれから",
    desc: "いろんな人の棚を紹介していくページです。あなたの棚も募集中。",
    url: "#",
    tag: "coming soon",
  },
];
