// rackscape 更新データ
// ★更新はこのファイルだけ編集すればOK。本文（HTML）は触らなくて大丈夫です。
//   日付は "2026-11-03" の形で。新しいものを配列の先頭に足すと、その順で表示されます。

// What's New（トップページと各ページ下部に表示）
const WHATS_NEW = [
 { date: "2026-11-08", label: "web app", text: "「scatter flutter」をv1.7.0に更新。ランダマイズを5種に拡張（SONG／SOUND／KIT／FX／PTN RND）" , url: "app/scatter-flutter/"},
 { date: "2026-11-05", label: "web app", text: "「scatter flutter」をv1.6.0に更新しました。自動保存とスナップショット保存（4つ）、初期状態へのリセット機能を追加しました。作ったパターンがリロードしても消えません。MIDI／WAVの一括書き出しで、処理中と完了の表示が分かるよう改善しました。", url: "app/scatter-flutter/"},
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

// [share:auto] SHARE_SHELVES / PRODUCTS / ITEM_INDEX（この範囲は管理アプリが自動生成します）
const SHARE_SHELVES = [
 {
  "id": "shelf-01",
  "kind": "book",
  "title": "本棚（サンプル1）",
  "photo": "assets/share/shelf-01.jpg",
  "items": [
   {
    "name": "現代落語論",
    "author": "立川談志",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F140390%2F",
    "note": "訂正（2026-11-05、所有者確認）：タイトルは『現代落語論考』ではなく『現代落語論』。版は要確認（候補：三一新書／中公文庫）。楽天リンク先は三一新書版",
    "itemNo": 1,
    "itemCode": "miyatake-01-01",
    "globalItemNo": 1,
    "productKey": "name:現代落語論",
    "alsoOn": [],
    "refLabel": "Wikipedia（著者：立川談志）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E7%AB%8B%E5%B7%9D%E8%AB%87%E5%BF%97"
   },
   {
    "name": "寝ながら学べる構造主義",
    "author": "内田樹",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4166602519?tag=rackscape-22",
    "itemNo": 2,
    "itemCode": "miyatake-01-02",
    "globalItemNo": 2,
    "isbn": "9784166602513",
    "productKey": "isbn:9784166602513",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：寝ながら学べる構造主義）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E5%AF%9D%E3%81%AA%E3%81%8C%E3%82%89%E5%AD%A6%E3%81%B9%E3%82%8B%E6%A7%8B%E9%80%A0%E4%B8%BB%E7%BE%A9",
    "ref2Label": "Wikipedia（著者：内田樹）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E5%86%85%E7%94%B0%E6%A8%B9"
   },
   {
    "name": "街とその不確かな壁（上）",
    "author": "村上春樹",
    "tags": [
     "小説"
    ],
    "status": "確定",
    "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F18180151%2F",
    "url": "https://www.amazon.co.jp/dp/4101001782?tag=rackscape-22",
    "itemNo": 3,
    "itemCode": "miyatake-01-03",
    "globalItemNo": 3,
    "isbn": "9784101001784",
    "productKey": "isbn:9784101001784",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：街とその不確かな壁）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E8%A1%97%E3%81%A8%E3%81%9D%E3%81%AE%E4%B8%8D%E7%A2%BA%E3%81%8B%E3%81%AA%E5%A3%81",
    "ref2Label": "Wikipedia（著者：村上春樹）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A8%B9"
   },
   {
    "name": "街とその不確かな壁（下）",
    "author": "村上春樹",
    "tags": [
     "小説"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4101001790?tag=rackscape-22",
    "itemNo": 4,
    "itemCode": "miyatake-01-04",
    "globalItemNo": 4,
    "isbn": "9784101001791",
    "productKey": "isbn:9784101001791",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：街とその不確かな壁）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E8%A1%97%E3%81%A8%E3%81%9D%E3%81%AE%E4%B8%8D%E7%A2%BA%E3%81%8B%E3%81%AA%E5%A3%81",
    "ref2Label": "Wikipedia（著者：村上春樹）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A8%B9"
   },
   {
    "name": "自宅で楽しむ週末邦画劇場",
    "author": "春日太一",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4911226285?tag=rackscape-22",
    "itemNo": 5,
    "itemCode": "miyatake-01-05",
    "globalItemNo": 5,
    "isbn": "9784911226285",
    "productKey": "isbn:9784911226285",
    "alsoOn": [],
    "refLabel": "Wikipedia（著者：春日太一）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E6%98%A5%E6%97%A5%E5%A4%AA%E4%B8%80"
   },
   {
    "name": "河童の三平",
    "author": "水木しげる",
    "tags": [
     "マンガ"
    ],
    "status": "確定",
    "note": "版要確認（Amazonリンクはちくま文庫・全1巻）",
    "url": "https://www.amazon.co.jp/dp/4480022384?tag=rackscape-22",
    "itemNo": 6,
    "itemCode": "miyatake-01-06",
    "globalItemNo": 6,
    "isbn": "9784480022387",
    "productKey": "isbn:9784480022387",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：河童の三平）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E6%B2%B3%E7%AB%A5%E3%81%AE%E4%B8%89%E5%B9%B3",
    "ref2Label": "Wikipedia（著者：水木しげる）",
    "ref2Url": "https://ja.wikipedia.org/?curid=655"
   },
   {
    "name": "国宝（上）青春篇",
    "author": "吉田修一",
    "tags": [
     "小説"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4022650087?tag=rackscape-22",
    "itemNo": 7,
    "itemCode": "miyatake-01-07",
    "globalItemNo": 7,
    "isbn": "9784022650085",
    "productKey": "isbn:9784022650085",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：国宝）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E5%9B%BD%E5%AE%9D_(%E5%B0%8F%E8%AA%AC)",
    "ref2Label": "Wikipedia（著者：吉田修一）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E5%90%89%E7%94%B0%E4%BF%AE%E4%B8%80"
   },
   {
    "name": "国宝（下）花道篇",
    "author": "吉田修一",
    "tags": [
     "小説"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4022650095?tag=rackscape-22",
    "itemNo": 8,
    "itemCode": "miyatake-01-08",
    "globalItemNo": 8,
    "isbn": "9784022650092",
    "productKey": "isbn:9784022650092",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：国宝）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E5%9B%BD%E5%AE%9D_(%E5%B0%8F%E8%AA%AC)",
    "ref2Label": "Wikipedia（著者：吉田修一）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E5%90%89%E7%94%B0%E4%BF%AE%E4%B8%80"
   },
   {
    "name": "グミ・チョコレート・パイン グミ編",
    "author": "大槻ケンヂ",
    "tags": [
     "小説"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4041847079?tag=rackscape-22",
    "itemNo": 9,
    "itemCode": "miyatake-01-09",
    "globalItemNo": 9,
    "isbn": "9784041847077",
    "productKey": "isbn:9784041847077",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：グミ・チョコレート・パイン）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%9F%E3%83%BB%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88%E3%83%BB%E3%83%91%E3%82%A4%E3%83%B3",
    "ref2Label": "Wikipedia（著者：大槻ケンヂ）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E5%A4%A7%E6%A7%BB%E3%82%B1%E3%83%B3%E3%83%82"
   },
   {
    "name": "グミ・チョコレート・パイン チョコレート編",
    "author": "大槻ケンヂ",
    "tags": [
     "小説"
    ],
    "status": "確定",
    "note": "正式タイトルは『チョコ編』（KADOKAWA公式）",
    "url": "https://www.amazon.co.jp/dp/4041847109?tag=rackscape-22",
    "itemNo": 10,
    "itemCode": "miyatake-01-10",
    "globalItemNo": 10,
    "isbn": "9784041847107",
    "productKey": "isbn:9784041847107",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：グミ・チョコレート・パイン）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%9F%E3%83%BB%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88%E3%83%BB%E3%83%91%E3%82%A4%E3%83%B3",
    "ref2Label": "Wikipedia（著者：大槻ケンヂ）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E5%A4%A7%E6%A7%BB%E3%82%B1%E3%83%B3%E3%83%82"
   },
   {
    "name": "グミ・チョコレート・パイン パイン編",
    "author": "大槻ケンヂ",
    "tags": [
     "小説"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4041847141?tag=rackscape-22",
    "itemNo": 11,
    "itemCode": "miyatake-01-11",
    "globalItemNo": 11,
    "isbn": "9784041847145",
    "productKey": "isbn:9784041847145",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：グミ・チョコレート・パイン）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%9F%E3%83%BB%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88%E3%83%BB%E3%83%91%E3%82%A4%E3%83%B3",
    "ref2Label": "Wikipedia（著者：大槻ケンヂ）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E5%A4%A7%E6%A7%BB%E3%82%B1%E3%83%B3%E3%83%82"
   },
   {
    "name": "サラバ！（上）",
    "author": "西加奈子",
    "tags": [
     "小説"
    ],
    "status": "確定",
    "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12941197%2F",
    "note": "楽天リンク先は単行本の版（版要確認）。Amazonリンクは小学館文庫",
    "url": "https://www.amazon.co.jp/dp/4094064427?tag=rackscape-22",
    "itemNo": 12,
    "itemCode": "miyatake-01-12",
    "globalItemNo": 12,
    "isbn": "9784094064421",
    "productKey": "isbn:9784094064421",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：サラバ!）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%83%90!",
    "ref2Label": "Wikipedia（著者：西加奈子）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E8%A5%BF%E5%8A%A0%E5%A5%88%E5%AD%90"
   },
   {
    "name": "サラバ！（中）",
    "author": "西加奈子",
    "tags": [
     "小説"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4094064435?tag=rackscape-22",
    "itemNo": 13,
    "itemCode": "miyatake-01-13",
    "globalItemNo": 13,
    "isbn": "9784094064438",
    "productKey": "isbn:9784094064438",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：サラバ!）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%83%90!",
    "ref2Label": "Wikipedia（著者：西加奈子）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E8%A5%BF%E5%8A%A0%E5%A5%88%E5%AD%90"
   },
   {
    "name": "サラバ！（下）",
    "author": "西加奈子",
    "tags": [
     "小説"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4094064443?tag=rackscape-22",
    "itemNo": 14,
    "itemCode": "miyatake-01-14",
    "globalItemNo": 14,
    "isbn": "9784094064445",
    "productKey": "isbn:9784094064445",
    "alsoOn": [],
    "refLabel": "Wikipedia（作品：サラバ!）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%83%90!",
    "ref2Label": "Wikipedia（著者：西加奈子）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E8%A5%BF%E5%8A%A0%E5%A5%88%E5%AD%90"
   }
  ],
  "unknown": [
   "帯で隠れた本など5点（サンプル1実施時に要確認として記録）"
  ],
  "globalNo": 1,
  "ownerId": "miyatake",
  "ownerName": "rackscape",
  "ownerShelfNo": 1,
  "code": "miyatake-01"
 },
 {
  "id": "shelf-02",
  "kind": "gear",
  "title": "機材棚（デスク周り）",
  "photo": "assets/share/shelf-02.jpg",
  "items": [
   {
    "name": "KORG microKORG 2 MWH（メタリックホワイト）",
    "maker": "KORG",
    "tags": [
     "シンセ"
    ],
    "status": "確定",
    "note": "楽天市場（島村楽器）の商品ページを確認済み。日本語版WikipediaにmicroKORG単独記事はないためメーカー記事へ（同記事内にmicroKORGの記述あり） AmazonリンクはmicroKORG 2の商品ページ。MWH（限定色）はページ側のバリエーション／出品で要確認",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%AB%E3%82%B0",
    "refLabel": "Wikipedia（メーカー：コルグ）",
    "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshimamuragakki%2Fmt0168880%2F",
    "url": "https://www.amazon.co.jp/dp/B0DGB6S4C9?tag=rackscape-22",
    "itemNo": 1,
    "itemCode": "miyatake-02-01",
    "globalItemNo": 15,
    "productKey": "asin:B0DGB6S4C9",
    "alsoOn": []
   },
   {
    "name": "SONY SMS-1P パワードモニタースピーカー（ペア）",
    "maker": "SONY",
    "tags": [
     "スピーカー"
    ],
    "status": "確定",
    "note": "前面パネル表記で型番まで確認。SMS-1P自体のWikipedia記事はないためメーカー記事へ",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%8B%E3%83%BC",
    "refLabel": "Wikipedia（メーカー：ソニー）",
    "itemNo": 2,
    "itemCode": "miyatake-02-02",
    "globalItemNo": 16,
    "productKey": "name:SONYSMS-1Pパワードモニタースピーカー（ペア）",
    "alsoOn": []
   },
   {
    "name": "DOUK AUDIO P2 真空管プリアンプ",
    "maker": "DOUK AUDIO",
    "tags": [
     "アンプ"
    ],
    "status": "確定",
    "note": "型番は所有者が撮影した天面写真で確定（円形ロゴにP2表記、HiFi TUBE PREAMP／REMOTE／TONE CONTROLの印刷、入力はRCA／BT／USB／TF）。Amazonの商品ページ（ASIN B08J3TMD7P）でも型番P2・真空管6K4×2本が一致。Amazonでは姉妹ブランドNobsound名義で販売。Wikipediaの単独記事は確認できず、リンクなし",
    "itemNo": 3,
    "itemCode": "miyatake-02-03",
    "globalItemNo": 17,
    "productKey": "asin:B08J3TMD7P",
    "alsoOn": [],
    "url": "https://www.amazon.co.jp/dp/B08J3TMD7P?tag=rackscape-22"
   },
   {
    "name": "Steinberg UR44C オーディオインターフェース",
    "maker": "Steinberg",
    "tags": [
     "DTM機材"
    ],
    "status": "確定",
    "note": "型番は本人申告で確定（UR44C、6入力4出力・USB 3.0）。Amazon ASIN B07YFGVH5H。本体の色は未確認（グレイ＆ブラック／レッドの2色あり）。単独記事はないためメーカー記事へ",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B0",
    "refLabel": "Wikipedia（メーカー：スタインバーグ）",
    "itemNo": 4,
    "itemCode": "miyatake-02-04",
    "globalItemNo": 18,
    "productKey": "asin:B07YFGVH5H",
    "alsoOn": [],
    "url": "https://www.amazon.co.jp/dp/B07YFGVH5H?tag=rackscape-22"
   },
   {
    "name": "ZOOM MS-70CDR+ マルチストンプ（空間系マルチエフェクター）",
    "maker": "ZOOM",
    "tags": [
     "エフェクター"
    ],
    "status": "確定",
    "note": "型番は本人申告で確定。写真の青い本体と一致。下の箱のG2X FOURは別製品だった。Amazonは国内正規品ページ（ブルー）。リンク先はビデオ会議のZoomではなく楽器メーカーの記事",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%BA%E3%83%BC%E3%83%A0_(%E6%A5%BD%E5%99%A8%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC)",
    "refLabel": "Wikipedia（メーカー：ズーム／ZOOM）",
    "itemNo": 5,
    "itemCode": "miyatake-02-05",
    "globalItemNo": 19,
    "productKey": "asin:B0CY5DWS46",
    "alsoOn": [],
    "url": "https://www.amazon.co.jp/dp/B0CY5DWS46?tag=rackscape-22"
   }
  ],
  "unknown": [
   "SONYヘッドホン（右上に一部のみ）",
   "ギター（左端に一部のみ）",
   "シンセ下の黒い小型機材（SUB PAD表記、型番不明）"
  ],
  "globalNo": 2,
  "ownerId": "miyatake",
  "ownerName": "rackscape",
  "ownerShelfNo": 2,
  "code": "miyatake-02"
 },
 {
  "id": "shelf-03",
  "kind": "book",
  "title": "本棚（平積み）",
  "photo": "assets/share/shelf-03.jpg",
  "items": [
   {
    "name": "地方を救う 官民共創ビジネス",
    "author": "EYストラテジー・アンド・コンサルティング編",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "note": "日経BP",
    "url": "https://www.amazon.co.jp/dp/4296207954?tag=rackscape-22",
    "itemNo": 1,
    "itemCode": "miyatake-03-01",
    "globalItemNo": 20,
    "isbn": "9784296207954",
    "productKey": "isbn:9784296207954",
    "alsoOn": []
   },
   {
    "name": "「風の谷」という希望 ―残すに値する未来をつくる",
    "author": "安宅和人",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "note": "英治出版 ISBN 9784862763501 を書誌で照合済み。楽天市場（楽天ブックス系ショップ）の商品ページでリンク生成済み",
    "refUrl": "https://ja.wikipedia.org/wiki/%E5%AE%89%E5%AE%85%E5%92%8C%E4%BA%BA",
    "refLabel": "Wikipedia（著者：安宅和人）",
    "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbookfan%2Fbk-4862763502%2F",
    "url": "https://www.amazon.co.jp/dp/4862763502?tag=rackscape-22",
    "itemNo": 2,
    "itemCode": "miyatake-03-02",
    "globalItemNo": 21,
    "isbn": "9784862763501",
    "productKey": "isbn:9784862763501",
    "alsoOn": []
   },
   {
    "name": "ガザとは何か ―パレスチナを知るための緊急講義",
    "author": "岡真理",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "note": "大和書房 ISBN 9784479394204 を書誌で照合済み。楽天市場（楽天ブックス系ショップ）の商品ページでリンク生成済み",
    "refUrl": "https://ja.wikipedia.org/wiki/%E5%B2%A1%E7%9C%9F%E7%90%86",
    "refLabel": "Wikipedia（著者：岡真理）",
    "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbibelot%2Fbook468%2F",
    "url": "https://www.amazon.co.jp/dp/4479394206?tag=rackscape-22",
    "itemNo": 3,
    "itemCode": "miyatake-03-03",
    "globalItemNo": 22,
    "isbn": "9784479394204",
    "productKey": "isbn:9784479394204",
    "alsoOn": []
   },
   {
    "name": "核燃料サイクルという迷宮",
    "author": "山本義隆",
    "tags": [
     "エッセイ"
    ],
    "status": "題名確定",
    "note": "みすず書房 著者は書誌（みすず書房公式）で山本義隆と確定",
    "url": "https://www.amazon.co.jp/dp/4622096978?tag=rackscape-22",
    "itemNo": 4,
    "itemCode": "miyatake-03-04",
    "globalItemNo": 23,
    "isbn": "9784622096979",
    "productKey": "isbn:9784622096979",
    "alsoOn": []
   },
   {
    "name": "人生が変わるゲームのつくりかた",
    "author": "米光一成",
    "tags": [
     "エッセイ"
    ],
    "status": "確定寄り",
    "note": "筑摩書房",
    "refUrl": "https://ja.wikipedia.org/wiki/%E7%B1%B3%E5%85%89%E4%B8%80%E6%88%90",
    "refLabel": "Wikipedia（著者：米光一成）",
    "url": "https://www.amazon.co.jp/dp/4480251510?tag=rackscape-22",
    "itemNo": 5,
    "itemCode": "miyatake-03-05",
    "globalItemNo": 24,
    "isbn": "9784480251510",
    "productKey": "isbn:9784480251510",
    "alsoOn": []
   },
   {
    "name": "ボードゲーム／アナログゲーム関連書（黄色い背表紙）",
    "author": "安藤（名は要確認）",
    "tags": [
     "エッセイ"
    ],
    "status": "要確認",
    "note": "研修・ワークショップ活用の文字のみ判読",
    "itemNo": 6,
    "itemCode": "miyatake-03-06",
    "globalItemNo": 25,
    "productKey": "name:ボードゲーム／アナログゲーム関連書（黄色い背表紙）",
    "alsoOn": []
   },
   {
    "name": "ゲームカタログ系の1冊（イラスト帯）",
    "author": "",
    "tags": [
     "エッセイ"
    ],
    "status": "要確認",
    "note": "題名の一部のみ判読",
    "itemNo": 7,
    "itemCode": "miyatake-03-07",
    "globalItemNo": 26,
    "productKey": "name:ゲームカタログ系の1冊（イラスト帯）",
    "alsoOn": []
   }
  ],
  "unknown": [
   "一番上の白い袋に隠れた2冊",
   "断面だけ見えている1冊（地方を救う の上）",
   "棚枠に隠れた下段2冊（うち1冊は英治出版、金井／野地編と判読）"
  ],
  "globalNo": 3,
  "ownerId": "miyatake",
  "ownerName": "rackscape",
  "ownerShelfNo": 3,
  "code": "miyatake-03"
 },
 {
  "id": "shelf-04",
  "kind": "book",
  "title": "本棚（縦置き＋平積み）",
  "photo": "assets/share/shelf-04.jpg",
  "items": [
   {
    "name": "BLUE GIANT MOMENTUM 8",
    "author": "石塚真一",
    "tags": [
     "マンガ"
    ],
    "status": "確定",
    "note": "楽天ブックス商品ページ＋ISBN 9784098640546 を確認済み",
    "refUrl": "https://ja.wikipedia.org/wiki/BLUE_GIANT",
    "refLabel": "Wikipedia（作品：BLUE GIANT）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E7%9F%B3%E5%A1%9A%E7%9C%9F%E4%B8%80",
    "ref2Label": "Wikipedia（著者：石塚真一）",
    "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F18627931%2F",
    "url": "https://www.amazon.co.jp/dp/4098640546?tag=rackscape-22",
    "itemNo": 1,
    "itemCode": "miyatake-04-01",
    "globalItemNo": 27,
    "isbn": "9784098640546",
    "productKey": "isbn:9784098640546",
    "alsoOn": []
   },
   {
    "name": "あかね噺",
    "author": "末永裕樹（原作）／馬上鷹将（作画）",
    "tags": [
     "マンガ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%81%82%E3%81%8B%E3%81%AD%E5%99%BA",
    "refLabel": "Wikipedia（作品：あかね噺）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E6%9C%AB%E6%B0%B8%E8%A3%95%E6%A8%B9",
    "ref2Label": "Wikipedia（著者：末永裕樹）",
    "note": "集英社。巻数は要確認。訂正（2026-11-04）：当初『ああ播磨灘』と誤認。拡大画像で背表紙の題字・著者名（原作：末永裕樹／作画：馬上鷹将）・出版社を確認して訂正 Amazonリンクはシリーズ第1巻（巻数は要確認）",
    "url": "https://www.amazon.co.jp/dp/4088831500?tag=rackscape-22",
    "itemNo": 2,
    "itemCode": "miyatake-04-02",
    "globalItemNo": 28,
    "isbn": "9784088831503",
    "productKey": "isbn:9784088831503",
    "alsoOn": []
   },
   {
    "name": "めしばな刑事タチバナ（2冊）",
    "author": "坂戸佐兵衛（原作）／旅井とり（作画）",
    "tags": [
     "マンガ"
    ],
    "status": "確定",
    "note": "徳間書店。巻数は要確認。訂正（2026-11-04）：当初『め組の大吾 救国のオレンジ』と誤認。拡大画像で背表紙の題字・著者名（原作：坂戸佐兵衛／作画：旅井とり）・出版社を確認して訂正 Amazonリンクはシリーズ第1巻（単行本版。巻数は要確認）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%81%E3%81%97%E3%81%B0%E3%81%AA%E5%88%91%E4%BA%8B%E3%82%BF%E3%83%81%E3%83%90%E3%83%8A",
    "refLabel": "Wikipedia（作品：めしばな刑事タチバナ）",
    "url": "https://www.amazon.co.jp/dp/4197804873?tag=rackscape-22",
    "itemNo": 3,
    "itemCode": "miyatake-04-03",
    "globalItemNo": 29,
    "isbn": "9784197804870",
    "productKey": "isbn:9784197804870",
    "alsoOn": []
   },
   {
    "name": "DRAFT KING",
    "author": "クロマツテツロウ",
    "tags": [
     "マンガ"
    ],
    "status": "題名確定",
    "note": "巻数（24？）は要確認 Amazonリンクはシリーズ第1巻（巻数は要確認）",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%83%95%E3%83%88%E3%82%AD%E3%83%B3%E3%82%B0",
    "refLabel": "Wikipedia（作品：ドラフトキング）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%83%9E%E3%83%84%E3%83%86%E3%83%84%E3%83%AD%E3%82%A6",
    "ref2Label": "Wikipedia（著者：クロマツテツロウ）",
    "url": "https://www.amazon.co.jp/dp/4088913337?tag=rackscape-22",
    "itemNo": 4,
    "itemCode": "miyatake-04-04",
    "globalItemNo": 30,
    "isbn": "9784088913339",
    "productKey": "isbn:9784088913339",
    "alsoOn": []
   },
   {
    "name": "ミュージック・マガジン 2021年8月号 特集：松本隆",
    "author": "",
    "tags": [
     "雑誌"
    ],
    "status": "確定",
    "note": "雑誌のためISBNなし（雑誌コード 08479-08）。Amazonリンクなし",
    "itemNo": 5,
    "itemCode": "miyatake-04-05",
    "globalItemNo": 31,
    "productKey": "name:ミュージック・マガジン2021年8月号特集：松本隆",
    "alsoOn": []
   },
   {
    "name": "R&B馬鹿リリック大行進",
    "author": "",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4905158311?tag=rackscape-22",
    "itemNo": 6,
    "itemCode": "miyatake-04-06",
    "globalItemNo": 32,
    "isbn": "9784905158318",
    "productKey": "isbn:9784905158318",
    "alsoOn": []
   },
   {
    "name": "大余談",
    "author": "スチャダラパー",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%81%E3%83%A3%E3%83%80%E3%83%A9%E3%83%91%E3%83%BC",
    "refLabel": "Wikipedia（スチャダラパー）",
    "url": "https://www.amazon.co.jp/dp/4845636247?tag=rackscape-22",
    "itemNo": 7,
    "itemCode": "miyatake-04-07",
    "globalItemNo": 33,
    "isbn": "9784845636242",
    "productKey": "isbn:9784845636242",
    "alsoOn": []
   },
   {
    "name": "余談 スチャダラパー・シングス",
    "author": "スチャダラパー",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%81%E3%83%A3%E3%83%80%E3%83%A9%E3%83%91%E3%83%BC",
    "refLabel": "Wikipedia（著者：スチャダラパー）",
    "note": "会場限定のインディー誌でISBNなし。Amazonリンクなし",
    "itemNo": 8,
    "itemCode": "miyatake-04-08",
    "globalItemNo": 34,
    "productKey": "name:余談スチャダラパー・シングス",
    "alsoOn": []
   },
   {
    "name": "余談 三代目J余談ブラザーズ",
    "author": "",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "note": "会場限定のインディー誌でISBNなし。Amazonリンクなし",
    "itemNo": 9,
    "itemCode": "miyatake-04-09",
    "globalItemNo": 35,
    "productKey": "name:余談三代目J余談ブラザーズ",
    "alsoOn": []
   },
   {
    "name": "余談 シン・ヨダン",
    "author": "",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "note": "インディー誌（公式通販のみ）でISBNなし。Amazonリンクなし",
    "itemNo": 10,
    "itemCode": "miyatake-04-10",
    "globalItemNo": 36,
    "productKey": "name:余談シン・ヨダン",
    "alsoOn": []
   },
   {
    "name": "風待茶房 松本隆対談集 2005―2015",
    "author": "松本隆",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E6%9D%BE%E6%9C%AC%E9%9A%86",
    "refLabel": "Wikipedia（松本隆）",
    "url": "https://www.amazon.co.jp/dp/4845629003?tag=rackscape-22",
    "itemNo": 11,
    "itemCode": "miyatake-04-11",
    "globalItemNo": 37,
    "isbn": "9784845629008",
    "productKey": "isbn:9784845629008",
    "alsoOn": []
   },
   {
    "name": "風待茶房 松本隆対談集 1971―2004",
    "author": "松本隆",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E6%9D%BE%E6%9C%AC%E9%9A%86",
    "refLabel": "Wikipedia（松本隆）",
    "url": "https://www.amazon.co.jp/dp/4845628996?tag=rackscape-22",
    "itemNo": 12,
    "itemCode": "miyatake-04-12",
    "globalItemNo": 38,
    "isbn": "9784845628995",
    "productKey": "isbn:9784845628995",
    "alsoOn": []
   },
   {
    "name": "言葉の教室",
    "author": "松本隆／延江浩",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E6%9D%BE%E6%9C%AC%E9%9A%86",
    "refLabel": "Wikipedia（著者：松本隆）",
    "url": "https://www.amazon.co.jp/dp/4838731876?tag=rackscape-22",
    "note": "Amazonリンクは単行本（マガジンハウス）。ちくま文庫版もあり版要確認",
    "itemNo": 13,
    "itemCode": "miyatake-04-13",
    "globalItemNo": 39,
    "isbn": "9784838731879",
    "productKey": "isbn:9784838731879",
    "alsoOn": []
   },
   {
    "name": "文藝別冊 吉田戦車 大増補新版",
    "author": "",
    "tags": [
     "マンガ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4309979106?tag=rackscape-22",
    "itemNo": 14,
    "itemCode": "miyatake-04-14",
    "globalItemNo": 40,
    "isbn": "9784309979106",
    "productKey": "isbn:9784309979106",
    "alsoOn": []
   },
   {
    "name": "文藝別冊 安西水丸",
    "author": "",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4309978436?tag=rackscape-22",
    "itemNo": 15,
    "itemCode": "miyatake-04-15",
    "globalItemNo": 41,
    "isbn": "9784309978437",
    "productKey": "isbn:9784309978437",
    "alsoOn": []
   },
   {
    "name": "フリースタイル 40",
    "author": "",
    "tags": [
     "雑誌"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AA%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB_(%E5%87%BA%E7%89%88%E7%A4%BE)",
    "refLabel": "Wikipedia（出版社：フリースタイル）",
    "url": "https://www.amazon.co.jp/dp/4939138933?tag=rackscape-22",
    "itemNo": 16,
    "itemCode": "miyatake-04-16",
    "globalItemNo": 42,
    "isbn": "9784939138935",
    "productKey": "isbn:9784939138935",
    "alsoOn": []
   },
   {
    "name": "フリースタイル 62 MANGA 2025",
    "author": "",
    "tags": [
     "雑誌"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AA%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB_(%E5%87%BA%E7%89%88%E7%A4%BE)",
    "refLabel": "Wikipedia（出版社：フリースタイル）",
    "url": "https://www.amazon.co.jp/dp/4867311162?tag=rackscape-22",
    "itemNo": 17,
    "itemCode": "miyatake-04-17",
    "globalItemNo": 43,
    "isbn": "9784867311165",
    "productKey": "isbn:9784867311165",
    "alsoOn": []
   },
   {
    "name": "フリースタイル 67",
    "author": "",
    "tags": [
     "雑誌"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AA%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB_(%E5%87%BA%E7%89%88%E7%A4%BE)",
    "refLabel": "Wikipedia（出版社：フリースタイル）",
    "url": "https://www.amazon.co.jp/dp/4867311219?tag=rackscape-22",
    "itemNo": 18,
    "itemCode": "miyatake-04-18",
    "globalItemNo": 44,
    "isbn": "9784867311219",
    "productKey": "isbn:9784867311219",
    "alsoOn": []
   },
   {
    "name": "ユリイカ 横尾忠則特集（11月臨時増刊号）",
    "author": "",
    "tags": [
     "雑誌"
    ],
    "status": "確定寄り",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%AA%E3%82%A4%E3%82%AB_(%E9%9B%91%E8%AA%8C)",
    "refLabel": "Wikipedia（雑誌：ユリイカ）",
    "url": "https://www.amazon.co.jp/dp/479170245X?tag=rackscape-22",
    "note": "書誌確認では「11月臨時増刊号」は存在せず、ユリイカ2012年11月号（通常号）特集の可能性が高い。要確認",
    "itemNo": 19,
    "itemCode": "miyatake-04-19",
    "globalItemNo": 45,
    "isbn": "9784791702459",
    "productKey": "isbn:9784791702459",
    "alsoOn": []
   },
   {
    "name": "ユリイカ 岡村靖幸特集",
    "author": "",
    "tags": [
     "雑誌"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%AA%E3%82%A4%E3%82%AB_(%E9%9B%91%E8%AA%8C)",
    "refLabel": "Wikipedia（雑誌：ユリイカ）",
    "url": "https://www.amazon.co.jp/dp/4791702565?tag=rackscape-22",
    "itemNo": 20,
    "itemCode": "miyatake-04-20",
    "globalItemNo": 46,
    "isbn": "9784791702565",
    "productKey": "isbn:9784791702565",
    "alsoOn": []
   },
   {
    "name": "ユリイカ 江口寿史特集",
    "author": "",
    "tags": [
     "雑誌"
    ],
    "status": "確定寄り",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%AA%E3%82%A4%E3%82%AB_(%E9%9B%91%E8%AA%8C)",
    "refLabel": "Wikipedia（雑誌：ユリイカ）",
    "url": "https://www.amazon.co.jp/dp/4791703030?tag=rackscape-22",
    "itemNo": 21,
    "itemCode": "miyatake-04-21",
    "globalItemNo": 47,
    "isbn": "9784791703036",
    "productKey": "isbn:9784791703036",
    "alsoOn": []
   },
   {
    "name": "ユリイカ みうらじゅん SINCE 1958",
    "author": "",
    "tags": [
     "雑誌"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%AA%E3%82%A4%E3%82%AB_(%E9%9B%91%E8%AA%8C)",
    "refLabel": "Wikipedia（雑誌：ユリイカ）",
    "url": "https://www.amazon.co.jp/dp/4791703200?tag=rackscape-22",
    "itemNo": 22,
    "itemCode": "miyatake-04-22",
    "globalItemNo": 48,
    "isbn": "9784791703203",
    "productKey": "isbn:9784791703203",
    "alsoOn": []
   },
   {
    "name": "文藝別冊 ナンシー関 増補新版",
    "author": "",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4309977820?tag=rackscape-22",
    "itemNo": 23,
    "itemCode": "miyatake-04-23",
    "globalItemNo": 49,
    "isbn": "9784309977829",
    "productKey": "isbn:9784309977829",
    "alsoOn": []
   },
   {
    "name": "1冊まるごと、松之丞改め六代目神田伯山（pen BOOKS）",
    "author": "",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "note": "ISBNを一次情報で確認できず、Amazonリンクなし（奥付・バーコード確認が必要）。刊行はCCCメディアハウス",
    "itemNo": 24,
    "itemCode": "miyatake-04-24",
    "globalItemNo": 50,
    "productKey": "name:1冊まるごと、松之丞改め六代目神田伯山（penBOOKS）",
    "alsoOn": []
   },
   {
    "name": "藝人春秋 Diary",
    "author": "水道橋博士",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E6%B0%B4%E9%81%93%E6%A9%8B%E5%8D%9A%E5%A3%AB",
    "refLabel": "Wikipedia（著者：水道橋博士）",
    "url": "https://www.amazon.co.jp/dp/4910547010?tag=rackscape-22",
    "itemNo": 25,
    "itemCode": "miyatake-04-25",
    "globalItemNo": 51,
    "isbn": "9784910547015",
    "productKey": "isbn:9784910547015",
    "alsoOn": []
   },
   {
    "name": "どうして人はキスをしたくなるんだろう？",
    "author": "宮藤官九郎／みうらじゅん",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%86%E3%82%89%E3%81%98%E3%82%85%E3%82%93",
    "refLabel": "Wikipedia（著者：みうらじゅん）",
    "ref2Url": "https://ja.wikipedia.org/wiki/%E5%AE%AE%E8%97%A4%E5%AE%98%E4%B9%9D%E9%83%8E",
    "ref2Label": "Wikipedia（著者：宮藤官九郎）",
    "url": "https://www.amazon.co.jp/dp/4087441911?tag=rackscape-22",
    "note": "Amazonリンクは集英社文庫版。単行本版もあり版要確認",
    "itemNo": 26,
    "itemCode": "miyatake-04-26",
    "globalItemNo": 52,
    "isbn": "9784087441918",
    "productKey": "isbn:9784087441918",
    "alsoOn": []
   },
   {
    "name": "人生エロエロ",
    "author": "みうらじゅん",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%86%E3%82%89%E3%81%98%E3%82%85%E3%82%93",
    "refLabel": "Wikipedia（著者：みうらじゅん）",
    "url": "https://www.amazon.co.jp/dp/4163900551?tag=rackscape-22",
    "note": "Amazonリンクは単行本。文春文庫版もあり版要確認",
    "itemNo": 27,
    "itemCode": "miyatake-04-27",
    "globalItemNo": 53,
    "isbn": "9784163900551",
    "productKey": "isbn:9784163900551",
    "alsoOn": []
   },
   {
    "name": "どうやらオレたち、いずれ死ぬっつーじゃないですか",
    "author": "みうらじゅん／リリー・フランキー",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%86%E3%82%89%E3%81%98%E3%82%85%E3%82%93",
    "refLabel": "Wikipedia（著者：みうらじゅん）",
    "url": "https://www.amazon.co.jp/dp/4101274622?tag=rackscape-22",
    "note": "Amazonリンクは新潮文庫版。単行本版もあり版要確認",
    "itemNo": 28,
    "itemCode": "miyatake-04-28",
    "globalItemNo": 54,
    "isbn": "9784101274621",
    "productKey": "isbn:9784101274621",
    "alsoOn": []
   },
   {
    "name": "官能小説用語表現辞典",
    "author": "永田守弘",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4480422331?tag=rackscape-22",
    "note": "出版社は河出書房新社ではなく筑摩書房（ちくま文庫）",
    "itemNo": 29,
    "itemCode": "miyatake-04-29",
    "globalItemNo": 55,
    "isbn": "9784480422330",
    "productKey": "isbn:9784480422330",
    "alsoOn": []
   },
   {
    "name": "時代劇ベスト100＋50",
    "author": "春日太一",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4334787878?tag=rackscape-22",
    "itemNo": 30,
    "itemCode": "miyatake-04-30",
    "globalItemNo": 56,
    "isbn": "9784334787875",
    "productKey": "isbn:9784334787875",
    "alsoOn": []
   },
   {
    "name": "藝人春秋（文春文庫）",
    "author": "水道橋博士",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E6%B0%B4%E9%81%93%E6%A9%8B%E5%8D%9A%E5%A3%AB",
    "refLabel": "Wikipedia（著者：水道橋博士）",
    "note": "訂正（2026-11-05）：文庫の版元はちくま文庫ではなく文春文庫（書誌確認による）",
    "url": "https://www.amazon.co.jp/dp/4167903512?tag=rackscape-22",
    "itemNo": 31,
    "itemCode": "miyatake-04-31",
    "globalItemNo": 57,
    "isbn": "9784167903510",
    "productKey": "isbn:9784167903510",
    "alsoOn": []
   },
   {
    "name": "天才はあきらめた",
    "author": "山里亮太",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "refUrl": "https://ja.wikipedia.org/wiki/%E5%B1%B1%E9%87%8C%E4%BA%AE%E5%A4%AA",
    "refLabel": "Wikipedia（著者：山里亮太）",
    "url": "https://www.amazon.co.jp/dp/4022619368?tag=rackscape-22",
    "itemNo": 32,
    "itemCode": "miyatake-04-32",
    "globalItemNo": 58,
    "isbn": "9784022619365",
    "productKey": "isbn:9784022619365",
    "alsoOn": []
   },
   {
    "name": "タモリ論",
    "author": "樋口毅宏",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4106105276?tag=rackscape-22",
    "itemNo": 33,
    "itemCode": "miyatake-04-33",
    "globalItemNo": 59,
    "isbn": "9784106105272",
    "productKey": "isbn:9784106105272",
    "alsoOn": []
   },
   {
    "name": "タモリと戦後ニッポン",
    "author": "近藤正高",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4062883287?tag=rackscape-22",
    "itemNo": 34,
    "itemCode": "miyatake-04-34",
    "globalItemNo": 60,
    "isbn": "9784062883283",
    "productKey": "isbn:9784062883283",
    "alsoOn": []
   },
   {
    "name": "スポーツマンガの身体",
    "author": "齋藤孝",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4166603256?tag=rackscape-22",
    "itemNo": 35,
    "itemCode": "miyatake-04-35",
    "globalItemNo": 61,
    "isbn": "9784166603251",
    "productKey": "isbn:9784166603251",
    "alsoOn": []
   },
   {
    "name": "衣笠祥雄 最後のシーズン",
    "author": "山際淳司",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/404082265X?tag=rackscape-22",
    "itemNo": 36,
    "itemCode": "miyatake-04-36",
    "globalItemNo": 62,
    "isbn": "9784040822655",
    "productKey": "isbn:9784040822655",
    "alsoOn": []
   },
   {
    "name": "粋な男たち",
    "author": "玉袋筋太郎",
    "tags": [
     "エッセイ"
    ],
    "status": "確定",
    "url": "https://www.amazon.co.jp/dp/4040822110?tag=rackscape-22",
    "itemNo": 37,
    "itemCode": "miyatake-04-37",
    "globalItemNo": 63,
    "isbn": "9784040822112",
    "productKey": "isbn:9784040822112",
    "alsoOn": []
   }
  ],
  "unknown": [
   "右側の雑誌の束：小口しか見えず個別の識別は不可（束として1件扱いが現実的）",
   "上段平積みマンガの残り約8冊：題名の一部のみ判読",
   "中段左の横積み約6冊：題名の一部のみ判読",
   "左端の立てた本・カレンダー類 約4点"
  ],
  "globalNo": 4,
  "ownerId": "miyatake",
  "ownerName": "rackscape",
  "ownerShelfNo": 4,
  "code": "miyatake-04"
 }
];
const PRODUCTS = [
 {
  "name": "現代落語論",
  "author": "立川談志",
  "maker": "",
  "isbn": "",
  "url": "",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F140390%2F",
  "refUrl": "https://ja.wikipedia.org/wiki/%E7%AB%8B%E5%B7%9D%E8%AB%87%E5%BF%97",
  "refLabel": "Wikipedia（著者：立川談志）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "name:現代落語論",
  "appearsIn": [
   "miyatake-01-01"
  ],
  "shelfCount": 1
 },
 {
  "name": "寝ながら学べる構造主義",
  "author": "内田樹",
  "maker": "",
  "isbn": "9784166602513",
  "url": "https://www.amazon.co.jp/dp/4166602519?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E5%AF%9D%E3%81%AA%E3%81%8C%E3%82%89%E5%AD%A6%E3%81%B9%E3%82%8B%E6%A7%8B%E9%80%A0%E4%B8%BB%E7%BE%A9",
  "refLabel": "Wikipedia（作品：寝ながら学べる構造主義）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E5%86%85%E7%94%B0%E6%A8%B9",
  "ref2Label": "Wikipedia（著者：内田樹）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784166602513",
  "appearsIn": [
   "miyatake-01-02"
  ],
  "shelfCount": 1
 },
 {
  "name": "街とその不確かな壁（上）",
  "author": "村上春樹",
  "maker": "",
  "isbn": "9784101001784",
  "url": "https://www.amazon.co.jp/dp/4101001782?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F18180151%2F",
  "refUrl": "https://ja.wikipedia.org/wiki/%E8%A1%97%E3%81%A8%E3%81%9D%E3%81%AE%E4%B8%8D%E7%A2%BA%E3%81%8B%E3%81%AA%E5%A3%81",
  "refLabel": "Wikipedia（作品：街とその不確かな壁）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A8%B9",
  "ref2Label": "Wikipedia（著者：村上春樹）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784101001784",
  "appearsIn": [
   "miyatake-01-03"
  ],
  "shelfCount": 1
 },
 {
  "name": "街とその不確かな壁（下）",
  "author": "村上春樹",
  "maker": "",
  "isbn": "9784101001791",
  "url": "https://www.amazon.co.jp/dp/4101001790?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E8%A1%97%E3%81%A8%E3%81%9D%E3%81%AE%E4%B8%8D%E7%A2%BA%E3%81%8B%E3%81%AA%E5%A3%81",
  "refLabel": "Wikipedia（作品：街とその不確かな壁）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A8%B9",
  "ref2Label": "Wikipedia（著者：村上春樹）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784101001791",
  "appearsIn": [
   "miyatake-01-04"
  ],
  "shelfCount": 1
 },
 {
  "name": "自宅で楽しむ週末邦画劇場",
  "author": "春日太一",
  "maker": "",
  "isbn": "9784911226285",
  "url": "https://www.amazon.co.jp/dp/4911226285?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E6%98%A5%E6%97%A5%E5%A4%AA%E4%B8%80",
  "refLabel": "Wikipedia（著者：春日太一）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784911226285",
  "appearsIn": [
   "miyatake-01-05"
  ],
  "shelfCount": 1
 },
 {
  "name": "河童の三平",
  "author": "水木しげる",
  "maker": "",
  "isbn": "9784480022387",
  "url": "https://www.amazon.co.jp/dp/4480022384?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E6%B2%B3%E7%AB%A5%E3%81%AE%E4%B8%89%E5%B9%B3",
  "refLabel": "Wikipedia（作品：河童の三平）",
  "ref2Url": "https://ja.wikipedia.org/?curid=655",
  "ref2Label": "Wikipedia（著者：水木しげる）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784480022387",
  "appearsIn": [
   "miyatake-01-06"
  ],
  "shelfCount": 1
 },
 {
  "name": "国宝（上）青春篇",
  "author": "吉田修一",
  "maker": "",
  "isbn": "9784022650085",
  "url": "https://www.amazon.co.jp/dp/4022650087?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E5%9B%BD%E5%AE%9D_(%E5%B0%8F%E8%AA%AC)",
  "refLabel": "Wikipedia（作品：国宝）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E5%90%89%E7%94%B0%E4%BF%AE%E4%B8%80",
  "ref2Label": "Wikipedia（著者：吉田修一）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784022650085",
  "appearsIn": [
   "miyatake-01-07"
  ],
  "shelfCount": 1
 },
 {
  "name": "国宝（下）花道篇",
  "author": "吉田修一",
  "maker": "",
  "isbn": "9784022650092",
  "url": "https://www.amazon.co.jp/dp/4022650095?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E5%9B%BD%E5%AE%9D_(%E5%B0%8F%E8%AA%AC)",
  "refLabel": "Wikipedia（作品：国宝）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E5%90%89%E7%94%B0%E4%BF%AE%E4%B8%80",
  "ref2Label": "Wikipedia（著者：吉田修一）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784022650092",
  "appearsIn": [
   "miyatake-01-08"
  ],
  "shelfCount": 1
 },
 {
  "name": "グミ・チョコレート・パイン グミ編",
  "author": "大槻ケンヂ",
  "maker": "",
  "isbn": "9784041847077",
  "url": "https://www.amazon.co.jp/dp/4041847079?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%9F%E3%83%BB%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88%E3%83%BB%E3%83%91%E3%82%A4%E3%83%B3",
  "refLabel": "Wikipedia（作品：グミ・チョコレート・パイン）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E5%A4%A7%E6%A7%BB%E3%82%B1%E3%83%B3%E3%83%82",
  "ref2Label": "Wikipedia（著者：大槻ケンヂ）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784041847077",
  "appearsIn": [
   "miyatake-01-09"
  ],
  "shelfCount": 1
 },
 {
  "name": "グミ・チョコレート・パイン チョコレート編",
  "author": "大槻ケンヂ",
  "maker": "",
  "isbn": "9784041847107",
  "url": "https://www.amazon.co.jp/dp/4041847109?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%9F%E3%83%BB%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88%E3%83%BB%E3%83%91%E3%82%A4%E3%83%B3",
  "refLabel": "Wikipedia（作品：グミ・チョコレート・パイン）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E5%A4%A7%E6%A7%BB%E3%82%B1%E3%83%B3%E3%83%82",
  "ref2Label": "Wikipedia（著者：大槻ケンヂ）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784041847107",
  "appearsIn": [
   "miyatake-01-10"
  ],
  "shelfCount": 1
 },
 {
  "name": "グミ・チョコレート・パイン パイン編",
  "author": "大槻ケンヂ",
  "maker": "",
  "isbn": "9784041847145",
  "url": "https://www.amazon.co.jp/dp/4041847141?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%9F%E3%83%BB%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88%E3%83%BB%E3%83%91%E3%82%A4%E3%83%B3",
  "refLabel": "Wikipedia（作品：グミ・チョコレート・パイン）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E5%A4%A7%E6%A7%BB%E3%82%B1%E3%83%B3%E3%83%82",
  "ref2Label": "Wikipedia（著者：大槻ケンヂ）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784041847145",
  "appearsIn": [
   "miyatake-01-11"
  ],
  "shelfCount": 1
 },
 {
  "name": "サラバ！（上）",
  "author": "西加奈子",
  "maker": "",
  "isbn": "9784094064421",
  "url": "https://www.amazon.co.jp/dp/4094064427?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12941197%2F",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%83%90!",
  "refLabel": "Wikipedia（作品：サラバ!）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E8%A5%BF%E5%8A%A0%E5%A5%88%E5%AD%90",
  "ref2Label": "Wikipedia（著者：西加奈子）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784094064421",
  "appearsIn": [
   "miyatake-01-12"
  ],
  "shelfCount": 1
 },
 {
  "name": "サラバ！（中）",
  "author": "西加奈子",
  "maker": "",
  "isbn": "9784094064438",
  "url": "https://www.amazon.co.jp/dp/4094064435?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%83%90!",
  "refLabel": "Wikipedia（作品：サラバ!）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E8%A5%BF%E5%8A%A0%E5%A5%88%E5%AD%90",
  "ref2Label": "Wikipedia（著者：西加奈子）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784094064438",
  "appearsIn": [
   "miyatake-01-13"
  ],
  "shelfCount": 1
 },
 {
  "name": "サラバ！（下）",
  "author": "西加奈子",
  "maker": "",
  "isbn": "9784094064445",
  "url": "https://www.amazon.co.jp/dp/4094064443?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A9%E3%83%90!",
  "refLabel": "Wikipedia（作品：サラバ!）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E8%A5%BF%E5%8A%A0%E5%A5%88%E5%AD%90",
  "ref2Label": "Wikipedia（著者：西加奈子）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784094064445",
  "appearsIn": [
   "miyatake-01-14"
  ],
  "shelfCount": 1
 },
 {
  "name": "KORG microKORG 2 MWH（メタリックホワイト）",
  "author": "",
  "maker": "KORG",
  "isbn": "",
  "url": "https://www.amazon.co.jp/dp/B0DGB6S4C9?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshimamuragakki%2Fmt0168880%2F",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%AB%E3%82%B0",
  "refLabel": "Wikipedia（メーカー：コルグ）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "asin:B0DGB6S4C9",
  "appearsIn": [
   "miyatake-02-01"
  ],
  "shelfCount": 1
 },
 {
  "name": "SONY SMS-1P パワードモニタースピーカー（ペア）",
  "author": "",
  "maker": "SONY",
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%8B%E3%83%BC",
  "refLabel": "Wikipedia（メーカー：ソニー）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "name:SONYSMS-1Pパワードモニタースピーカー（ペア）",
  "appearsIn": [
   "miyatake-02-02"
  ],
  "shelfCount": 1
 },
 {
  "name": "DOUK AUDIO P2 真空管プリアンプ",
  "author": "",
  "maker": "DOUK AUDIO",
  "isbn": "",
  "url": "https://www.amazon.co.jp/dp/B08J3TMD7P?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "asin:B08J3TMD7P",
  "appearsIn": [
   "miyatake-02-03"
  ],
  "shelfCount": 1
 },
 {
  "name": "Steinberg UR44C オーディオインターフェース",
  "author": "",
  "maker": "Steinberg",
  "isbn": "",
  "url": "https://www.amazon.co.jp/dp/B07YFGVH5H?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B0",
  "refLabel": "Wikipedia（メーカー：スタインバーグ）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "asin:B07YFGVH5H",
  "appearsIn": [
   "miyatake-02-04"
  ],
  "shelfCount": 1
 },
 {
  "name": "ZOOM MS-70CDR+ マルチストンプ（空間系マルチエフェクター）",
  "author": "",
  "maker": "ZOOM",
  "isbn": "",
  "url": "https://www.amazon.co.jp/dp/B0CY5DWS46?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%BA%E3%83%BC%E3%83%A0_(%E6%A5%BD%E5%99%A8%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC)",
  "refLabel": "Wikipedia（メーカー：ズーム／ZOOM）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "asin:B0CY5DWS46",
  "appearsIn": [
   "miyatake-02-05"
  ],
  "shelfCount": 1
 },
 {
  "name": "地方を救う 官民共創ビジネス",
  "author": "EYストラテジー・アンド・コンサルティング編",
  "maker": "",
  "isbn": "9784296207954",
  "url": "https://www.amazon.co.jp/dp/4296207954?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784296207954",
  "appearsIn": [
   "miyatake-03-01"
  ],
  "shelfCount": 1
 },
 {
  "name": "「風の谷」という希望 ―残すに値する未来をつくる",
  "author": "安宅和人",
  "maker": "",
  "isbn": "9784862763501",
  "url": "https://www.amazon.co.jp/dp/4862763502?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbookfan%2Fbk-4862763502%2F",
  "refUrl": "https://ja.wikipedia.org/wiki/%E5%AE%89%E5%AE%85%E5%92%8C%E4%BA%BA",
  "refLabel": "Wikipedia（著者：安宅和人）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784862763501",
  "appearsIn": [
   "miyatake-03-02"
  ],
  "shelfCount": 1
 },
 {
  "name": "ガザとは何か ―パレスチナを知るための緊急講義",
  "author": "岡真理",
  "maker": "",
  "isbn": "9784479394204",
  "url": "https://www.amazon.co.jp/dp/4479394206?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbibelot%2Fbook468%2F",
  "refUrl": "https://ja.wikipedia.org/wiki/%E5%B2%A1%E7%9C%9F%E7%90%86",
  "refLabel": "Wikipedia（著者：岡真理）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784479394204",
  "appearsIn": [
   "miyatake-03-03"
  ],
  "shelfCount": 1
 },
 {
  "name": "核燃料サイクルという迷宮",
  "author": "山本義隆",
  "maker": "",
  "isbn": "9784622096979",
  "url": "https://www.amazon.co.jp/dp/4622096978?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784622096979",
  "appearsIn": [
   "miyatake-03-04"
  ],
  "shelfCount": 1
 },
 {
  "name": "人生が変わるゲームのつくりかた",
  "author": "米光一成",
  "maker": "",
  "isbn": "9784480251510",
  "url": "https://www.amazon.co.jp/dp/4480251510?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E7%B1%B3%E5%85%89%E4%B8%80%E6%88%90",
  "refLabel": "Wikipedia（著者：米光一成）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784480251510",
  "appearsIn": [
   "miyatake-03-05"
  ],
  "shelfCount": 1
 },
 {
  "name": "ボードゲーム／アナログゲーム関連書（黄色い背表紙）",
  "author": "安藤（名は要確認）",
  "maker": "",
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "name:ボードゲーム／アナログゲーム関連書（黄色い背表紙）",
  "appearsIn": [
   "miyatake-03-06"
  ],
  "shelfCount": 1
 },
 {
  "name": "ゲームカタログ系の1冊（イラスト帯）",
  "author": "",
  "maker": "",
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "name:ゲームカタログ系の1冊（イラスト帯）",
  "appearsIn": [
   "miyatake-03-07"
  ],
  "shelfCount": 1
 },
 {
  "name": "BLUE GIANT MOMENTUM 8",
  "author": "石塚真一",
  "maker": "",
  "isbn": "9784098640546",
  "url": "https://www.amazon.co.jp/dp/4098640546?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F18627931%2F",
  "refUrl": "https://ja.wikipedia.org/wiki/BLUE_GIANT",
  "refLabel": "Wikipedia（作品：BLUE GIANT）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E7%9F%B3%E5%A1%9A%E7%9C%9F%E4%B8%80",
  "ref2Label": "Wikipedia（著者：石塚真一）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784098640546",
  "appearsIn": [
   "miyatake-04-01"
  ],
  "shelfCount": 1
 },
 {
  "name": "あかね噺",
  "author": "末永裕樹（原作）／馬上鷹将（作画）",
  "maker": "",
  "isbn": "9784088831503",
  "url": "https://www.amazon.co.jp/dp/4088831500?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%81%82%E3%81%8B%E3%81%AD%E5%99%BA",
  "refLabel": "Wikipedia（作品：あかね噺）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E6%9C%AB%E6%B0%B8%E8%A3%95%E6%A8%B9",
  "ref2Label": "Wikipedia（著者：末永裕樹）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784088831503",
  "appearsIn": [
   "miyatake-04-02"
  ],
  "shelfCount": 1
 },
 {
  "name": "めしばな刑事タチバナ（2冊）",
  "author": "坂戸佐兵衛（原作）／旅井とり（作画）",
  "maker": "",
  "isbn": "9784197804870",
  "url": "https://www.amazon.co.jp/dp/4197804873?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%81%E3%81%97%E3%81%B0%E3%81%AA%E5%88%91%E4%BA%8B%E3%82%BF%E3%83%81%E3%83%90%E3%83%8A",
  "refLabel": "Wikipedia（作品：めしばな刑事タチバナ）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784197804870",
  "appearsIn": [
   "miyatake-04-03"
  ],
  "shelfCount": 1
 },
 {
  "name": "DRAFT KING",
  "author": "クロマツテツロウ",
  "maker": "",
  "isbn": "9784088913339",
  "url": "https://www.amazon.co.jp/dp/4088913337?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%83%95%E3%83%88%E3%82%AD%E3%83%B3%E3%82%B0",
  "refLabel": "Wikipedia（作品：ドラフトキング）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%83%9E%E3%83%84%E3%83%86%E3%83%84%E3%83%AD%E3%82%A6",
  "ref2Label": "Wikipedia（著者：クロマツテツロウ）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784088913339",
  "appearsIn": [
   "miyatake-04-04"
  ],
  "shelfCount": 1
 },
 {
  "name": "ミュージック・マガジン 2021年8月号 特集：松本隆",
  "author": "",
  "maker": "",
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "name:ミュージック・マガジン2021年8月号特集：松本隆",
  "appearsIn": [
   "miyatake-04-05"
  ],
  "shelfCount": 1
 },
 {
  "name": "R&B馬鹿リリック大行進",
  "author": "",
  "maker": "",
  "isbn": "9784905158318",
  "url": "https://www.amazon.co.jp/dp/4905158311?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784905158318",
  "appearsIn": [
   "miyatake-04-06"
  ],
  "shelfCount": 1
 },
 {
  "name": "大余談",
  "author": "スチャダラパー",
  "maker": "",
  "isbn": "9784845636242",
  "url": "https://www.amazon.co.jp/dp/4845636247?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%81%E3%83%A3%E3%83%80%E3%83%A9%E3%83%91%E3%83%BC",
  "refLabel": "Wikipedia（スチャダラパー）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784845636242",
  "appearsIn": [
   "miyatake-04-07"
  ],
  "shelfCount": 1
 },
 {
  "name": "余談 スチャダラパー・シングス",
  "author": "スチャダラパー",
  "maker": "",
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%81%E3%83%A3%E3%83%80%E3%83%A9%E3%83%91%E3%83%BC",
  "refLabel": "Wikipedia（著者：スチャダラパー）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "name:余談スチャダラパー・シングス",
  "appearsIn": [
   "miyatake-04-08"
  ],
  "shelfCount": 1
 },
 {
  "name": "余談 三代目J余談ブラザーズ",
  "author": "",
  "maker": "",
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "name:余談三代目J余談ブラザーズ",
  "appearsIn": [
   "miyatake-04-09"
  ],
  "shelfCount": 1
 },
 {
  "name": "余談 シン・ヨダン",
  "author": "",
  "maker": "",
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "name:余談シン・ヨダン",
  "appearsIn": [
   "miyatake-04-10"
  ],
  "shelfCount": 1
 },
 {
  "name": "風待茶房 松本隆対談集 2005―2015",
  "author": "松本隆",
  "maker": "",
  "isbn": "9784845629008",
  "url": "https://www.amazon.co.jp/dp/4845629003?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E6%9D%BE%E6%9C%AC%E9%9A%86",
  "refLabel": "Wikipedia（松本隆）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784845629008",
  "appearsIn": [
   "miyatake-04-11"
  ],
  "shelfCount": 1
 },
 {
  "name": "風待茶房 松本隆対談集 1971―2004",
  "author": "松本隆",
  "maker": "",
  "isbn": "9784845628995",
  "url": "https://www.amazon.co.jp/dp/4845628996?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E6%9D%BE%E6%9C%AC%E9%9A%86",
  "refLabel": "Wikipedia（松本隆）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784845628995",
  "appearsIn": [
   "miyatake-04-12"
  ],
  "shelfCount": 1
 },
 {
  "name": "言葉の教室",
  "author": "松本隆／延江浩",
  "maker": "",
  "isbn": "9784838731879",
  "url": "https://www.amazon.co.jp/dp/4838731876?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E6%9D%BE%E6%9C%AC%E9%9A%86",
  "refLabel": "Wikipedia（著者：松本隆）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784838731879",
  "appearsIn": [
   "miyatake-04-13"
  ],
  "shelfCount": 1
 },
 {
  "name": "文藝別冊 吉田戦車 大増補新版",
  "author": "",
  "maker": "",
  "isbn": "9784309979106",
  "url": "https://www.amazon.co.jp/dp/4309979106?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784309979106",
  "appearsIn": [
   "miyatake-04-14"
  ],
  "shelfCount": 1
 },
 {
  "name": "文藝別冊 安西水丸",
  "author": "",
  "maker": "",
  "isbn": "9784309978437",
  "url": "https://www.amazon.co.jp/dp/4309978436?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784309978437",
  "appearsIn": [
   "miyatake-04-15"
  ],
  "shelfCount": 1
 },
 {
  "name": "フリースタイル 40",
  "author": "",
  "maker": "",
  "isbn": "9784939138935",
  "url": "https://www.amazon.co.jp/dp/4939138933?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AA%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB_(%E5%87%BA%E7%89%88%E7%A4%BE)",
  "refLabel": "Wikipedia（出版社：フリースタイル）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784939138935",
  "appearsIn": [
   "miyatake-04-16"
  ],
  "shelfCount": 1
 },
 {
  "name": "フリースタイル 62 MANGA 2025",
  "author": "",
  "maker": "",
  "isbn": "9784867311165",
  "url": "https://www.amazon.co.jp/dp/4867311162?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AA%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB_(%E5%87%BA%E7%89%88%E7%A4%BE)",
  "refLabel": "Wikipedia（出版社：フリースタイル）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784867311165",
  "appearsIn": [
   "miyatake-04-17"
  ],
  "shelfCount": 1
 },
 {
  "name": "フリースタイル 67",
  "author": "",
  "maker": "",
  "isbn": "9784867311219",
  "url": "https://www.amazon.co.jp/dp/4867311219?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AA%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB_(%E5%87%BA%E7%89%88%E7%A4%BE)",
  "refLabel": "Wikipedia（出版社：フリースタイル）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784867311219",
  "appearsIn": [
   "miyatake-04-18"
  ],
  "shelfCount": 1
 },
 {
  "name": "ユリイカ 横尾忠則特集（11月臨時増刊号）",
  "author": "",
  "maker": "",
  "isbn": "9784791702459",
  "url": "https://www.amazon.co.jp/dp/479170245X?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%AA%E3%82%A4%E3%82%AB_(%E9%9B%91%E8%AA%8C)",
  "refLabel": "Wikipedia（雑誌：ユリイカ）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784791702459",
  "appearsIn": [
   "miyatake-04-19"
  ],
  "shelfCount": 1
 },
 {
  "name": "ユリイカ 岡村靖幸特集",
  "author": "",
  "maker": "",
  "isbn": "9784791702565",
  "url": "https://www.amazon.co.jp/dp/4791702565?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%AA%E3%82%A4%E3%82%AB_(%E9%9B%91%E8%AA%8C)",
  "refLabel": "Wikipedia（雑誌：ユリイカ）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784791702565",
  "appearsIn": [
   "miyatake-04-20"
  ],
  "shelfCount": 1
 },
 {
  "name": "ユリイカ 江口寿史特集",
  "author": "",
  "maker": "",
  "isbn": "9784791703036",
  "url": "https://www.amazon.co.jp/dp/4791703030?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%AA%E3%82%A4%E3%82%AB_(%E9%9B%91%E8%AA%8C)",
  "refLabel": "Wikipedia（雑誌：ユリイカ）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784791703036",
  "appearsIn": [
   "miyatake-04-21"
  ],
  "shelfCount": 1
 },
 {
  "name": "ユリイカ みうらじゅん SINCE 1958",
  "author": "",
  "maker": "",
  "isbn": "9784791703203",
  "url": "https://www.amazon.co.jp/dp/4791703200?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%AA%E3%82%A4%E3%82%AB_(%E9%9B%91%E8%AA%8C)",
  "refLabel": "Wikipedia（雑誌：ユリイカ）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784791703203",
  "appearsIn": [
   "miyatake-04-22"
  ],
  "shelfCount": 1
 },
 {
  "name": "文藝別冊 ナンシー関 増補新版",
  "author": "",
  "maker": "",
  "isbn": "9784309977829",
  "url": "https://www.amazon.co.jp/dp/4309977820?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784309977829",
  "appearsIn": [
   "miyatake-04-23"
  ],
  "shelfCount": 1
 },
 {
  "name": "1冊まるごと、松之丞改め六代目神田伯山（pen BOOKS）",
  "author": "",
  "maker": "",
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "name:1冊まるごと、松之丞改め六代目神田伯山（penBOOKS）",
  "appearsIn": [
   "miyatake-04-24"
  ],
  "shelfCount": 1
 },
 {
  "name": "藝人春秋 Diary",
  "author": "水道橋博士",
  "maker": "",
  "isbn": "9784910547015",
  "url": "https://www.amazon.co.jp/dp/4910547010?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E6%B0%B4%E9%81%93%E6%A9%8B%E5%8D%9A%E5%A3%AB",
  "refLabel": "Wikipedia（著者：水道橋博士）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784910547015",
  "appearsIn": [
   "miyatake-04-25"
  ],
  "shelfCount": 1
 },
 {
  "name": "どうして人はキスをしたくなるんだろう？",
  "author": "宮藤官九郎／みうらじゅん",
  "maker": "",
  "isbn": "9784087441918",
  "url": "https://www.amazon.co.jp/dp/4087441911?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%86%E3%82%89%E3%81%98%E3%82%85%E3%82%93",
  "refLabel": "Wikipedia（著者：みうらじゅん）",
  "ref2Url": "https://ja.wikipedia.org/wiki/%E5%AE%AE%E8%97%A4%E5%AE%98%E4%B9%9D%E9%83%8E",
  "ref2Label": "Wikipedia（著者：宮藤官九郎）",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784087441918",
  "appearsIn": [
   "miyatake-04-26"
  ],
  "shelfCount": 1
 },
 {
  "name": "人生エロエロ",
  "author": "みうらじゅん",
  "maker": "",
  "isbn": "9784163900551",
  "url": "https://www.amazon.co.jp/dp/4163900551?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%86%E3%82%89%E3%81%98%E3%82%85%E3%82%93",
  "refLabel": "Wikipedia（著者：みうらじゅん）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784163900551",
  "appearsIn": [
   "miyatake-04-27"
  ],
  "shelfCount": 1
 },
 {
  "name": "どうやらオレたち、いずれ死ぬっつーじゃないですか",
  "author": "みうらじゅん／リリー・フランキー",
  "maker": "",
  "isbn": "9784101274621",
  "url": "https://www.amazon.co.jp/dp/4101274622?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%86%E3%82%89%E3%81%98%E3%82%85%E3%82%93",
  "refLabel": "Wikipedia（著者：みうらじゅん）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784101274621",
  "appearsIn": [
   "miyatake-04-28"
  ],
  "shelfCount": 1
 },
 {
  "name": "官能小説用語表現辞典",
  "author": "永田守弘",
  "maker": "",
  "isbn": "9784480422330",
  "url": "https://www.amazon.co.jp/dp/4480422331?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784480422330",
  "appearsIn": [
   "miyatake-04-29"
  ],
  "shelfCount": 1
 },
 {
  "name": "時代劇ベスト100＋50",
  "author": "春日太一",
  "maker": "",
  "isbn": "9784334787875",
  "url": "https://www.amazon.co.jp/dp/4334787878?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784334787875",
  "appearsIn": [
   "miyatake-04-30"
  ],
  "shelfCount": 1
 },
 {
  "name": "藝人春秋（文春文庫）",
  "author": "水道橋博士",
  "maker": "",
  "isbn": "9784167903510",
  "url": "https://www.amazon.co.jp/dp/4167903512?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E6%B0%B4%E9%81%93%E6%A9%8B%E5%8D%9A%E5%A3%AB",
  "refLabel": "Wikipedia（著者：水道橋博士）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784167903510",
  "appearsIn": [
   "miyatake-04-31"
  ],
  "shelfCount": 1
 },
 {
  "name": "天才はあきらめた",
  "author": "山里亮太",
  "maker": "",
  "isbn": "9784022619365",
  "url": "https://www.amazon.co.jp/dp/4022619368?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "https://ja.wikipedia.org/wiki/%E5%B1%B1%E9%87%8C%E4%BA%AE%E5%A4%AA",
  "refLabel": "Wikipedia（著者：山里亮太）",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784022619365",
  "appearsIn": [
   "miyatake-04-32"
  ],
  "shelfCount": 1
 },
 {
  "name": "タモリ論",
  "author": "樋口毅宏",
  "maker": "",
  "isbn": "9784106105272",
  "url": "https://www.amazon.co.jp/dp/4106105276?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784106105272",
  "appearsIn": [
   "miyatake-04-33"
  ],
  "shelfCount": 1
 },
 {
  "name": "タモリと戦後ニッポン",
  "author": "近藤正高",
  "maker": "",
  "isbn": "9784062883283",
  "url": "https://www.amazon.co.jp/dp/4062883287?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784062883283",
  "appearsIn": [
   "miyatake-04-34"
  ],
  "shelfCount": 1
 },
 {
  "name": "スポーツマンガの身体",
  "author": "齋藤孝",
  "maker": "",
  "isbn": "9784166603251",
  "url": "https://www.amazon.co.jp/dp/4166603256?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784166603251",
  "appearsIn": [
   "miyatake-04-35"
  ],
  "shelfCount": 1
 },
 {
  "name": "衣笠祥雄 最後のシーズン",
  "author": "山際淳司",
  "maker": "",
  "isbn": "9784040822655",
  "url": "https://www.amazon.co.jp/dp/404082265X?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784040822655",
  "appearsIn": [
   "miyatake-04-36"
  ],
  "shelfCount": 1
 },
 {
  "name": "粋な男たち",
  "author": "玉袋筋太郎",
  "maker": "",
  "isbn": "9784040822112",
  "url": "https://www.amazon.co.jp/dp/4040822110?tag=rackscape-22",
  "rakutenUrl": "",
  "refUrl": "",
  "refLabel": "",
  "ref2Url": "",
  "ref2Label": "",
  "publisherUrl": "",
  "publisherLabel": "",
  "productKey": "isbn:9784040822112",
  "appearsIn": [
   "miyatake-04-37"
  ],
  "shelfCount": 1
 }
];
const ITEM_INDEX = [
 {
  "itemCode": "miyatake-01-01",
  "globalItemNo": 1,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "現代落語論",
  "author": "立川談志",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "",
  "url": "",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F140390%2F",
  "productKey": "name:現代落語論"
 },
 {
  "itemCode": "miyatake-01-02",
  "globalItemNo": 2,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "寝ながら学べる構造主義",
  "author": "内田樹",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784166602513",
  "url": "https://www.amazon.co.jp/dp/4166602519?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784166602513"
 },
 {
  "itemCode": "miyatake-01-03",
  "globalItemNo": 3,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "街とその不確かな壁（上）",
  "author": "村上春樹",
  "maker": "",
  "tags": [
   "小説"
  ],
  "isbn": "9784101001784",
  "url": "https://www.amazon.co.jp/dp/4101001782?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F18180151%2F",
  "productKey": "isbn:9784101001784"
 },
 {
  "itemCode": "miyatake-01-04",
  "globalItemNo": 4,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "街とその不確かな壁（下）",
  "author": "村上春樹",
  "maker": "",
  "tags": [
   "小説"
  ],
  "isbn": "9784101001791",
  "url": "https://www.amazon.co.jp/dp/4101001790?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784101001791"
 },
 {
  "itemCode": "miyatake-01-05",
  "globalItemNo": 5,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "自宅で楽しむ週末邦画劇場",
  "author": "春日太一",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784911226285",
  "url": "https://www.amazon.co.jp/dp/4911226285?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784911226285"
 },
 {
  "itemCode": "miyatake-01-06",
  "globalItemNo": 6,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "河童の三平",
  "author": "水木しげる",
  "maker": "",
  "tags": [
   "マンガ"
  ],
  "isbn": "9784480022387",
  "url": "https://www.amazon.co.jp/dp/4480022384?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784480022387"
 },
 {
  "itemCode": "miyatake-01-07",
  "globalItemNo": 7,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "国宝（上）青春篇",
  "author": "吉田修一",
  "maker": "",
  "tags": [
   "小説"
  ],
  "isbn": "9784022650085",
  "url": "https://www.amazon.co.jp/dp/4022650087?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784022650085"
 },
 {
  "itemCode": "miyatake-01-08",
  "globalItemNo": 8,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "国宝（下）花道篇",
  "author": "吉田修一",
  "maker": "",
  "tags": [
   "小説"
  ],
  "isbn": "9784022650092",
  "url": "https://www.amazon.co.jp/dp/4022650095?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784022650092"
 },
 {
  "itemCode": "miyatake-01-09",
  "globalItemNo": 9,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "グミ・チョコレート・パイン グミ編",
  "author": "大槻ケンヂ",
  "maker": "",
  "tags": [
   "小説"
  ],
  "isbn": "9784041847077",
  "url": "https://www.amazon.co.jp/dp/4041847079?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784041847077"
 },
 {
  "itemCode": "miyatake-01-10",
  "globalItemNo": 10,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "グミ・チョコレート・パイン チョコレート編",
  "author": "大槻ケンヂ",
  "maker": "",
  "tags": [
   "小説"
  ],
  "isbn": "9784041847107",
  "url": "https://www.amazon.co.jp/dp/4041847109?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784041847107"
 },
 {
  "itemCode": "miyatake-01-11",
  "globalItemNo": 11,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "グミ・チョコレート・パイン パイン編",
  "author": "大槻ケンヂ",
  "maker": "",
  "tags": [
   "小説"
  ],
  "isbn": "9784041847145",
  "url": "https://www.amazon.co.jp/dp/4041847141?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784041847145"
 },
 {
  "itemCode": "miyatake-01-12",
  "globalItemNo": 12,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "サラバ！（上）",
  "author": "西加奈子",
  "maker": "",
  "tags": [
   "小説"
  ],
  "isbn": "9784094064421",
  "url": "https://www.amazon.co.jp/dp/4094064427?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12941197%2F",
  "productKey": "isbn:9784094064421"
 },
 {
  "itemCode": "miyatake-01-13",
  "globalItemNo": 13,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "サラバ！（中）",
  "author": "西加奈子",
  "maker": "",
  "tags": [
   "小説"
  ],
  "isbn": "9784094064438",
  "url": "https://www.amazon.co.jp/dp/4094064435?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784094064438"
 },
 {
  "itemCode": "miyatake-01-14",
  "globalItemNo": 14,
  "shelfCode": "miyatake-01",
  "globalNo": 1,
  "name": "サラバ！（下）",
  "author": "西加奈子",
  "maker": "",
  "tags": [
   "小説"
  ],
  "isbn": "9784094064445",
  "url": "https://www.amazon.co.jp/dp/4094064443?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784094064445"
 },
 {
  "itemCode": "miyatake-02-01",
  "globalItemNo": 15,
  "shelfCode": "miyatake-02",
  "globalNo": 2,
  "name": "KORG microKORG 2 MWH（メタリックホワイト）",
  "author": "",
  "maker": "KORG",
  "tags": [
   "シンセ"
  ],
  "isbn": "",
  "url": "https://www.amazon.co.jp/dp/B0DGB6S4C9?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshimamuragakki%2Fmt0168880%2F",
  "productKey": "asin:B0DGB6S4C9"
 },
 {
  "itemCode": "miyatake-02-02",
  "globalItemNo": 16,
  "shelfCode": "miyatake-02",
  "globalNo": 2,
  "name": "SONY SMS-1P パワードモニタースピーカー（ペア）",
  "author": "",
  "maker": "SONY",
  "tags": [
   "スピーカー"
  ],
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "productKey": "name:SONYSMS-1Pパワードモニタースピーカー（ペア）"
 },
 {
  "itemCode": "miyatake-02-03",
  "globalItemNo": 17,
  "shelfCode": "miyatake-02",
  "globalNo": 2,
  "name": "DOUK AUDIO P2 真空管プリアンプ",
  "author": "",
  "maker": "DOUK AUDIO",
  "tags": [
   "アンプ"
  ],
  "isbn": "",
  "url": "https://www.amazon.co.jp/dp/B08J3TMD7P?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "asin:B08J3TMD7P"
 },
 {
  "itemCode": "miyatake-02-04",
  "globalItemNo": 18,
  "shelfCode": "miyatake-02",
  "globalNo": 2,
  "name": "Steinberg UR44C オーディオインターフェース",
  "author": "",
  "maker": "Steinberg",
  "tags": [
   "DTM機材"
  ],
  "isbn": "",
  "url": "https://www.amazon.co.jp/dp/B07YFGVH5H?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "asin:B07YFGVH5H"
 },
 {
  "itemCode": "miyatake-02-05",
  "globalItemNo": 19,
  "shelfCode": "miyatake-02",
  "globalNo": 2,
  "name": "ZOOM MS-70CDR+ マルチストンプ（空間系マルチエフェクター）",
  "author": "",
  "maker": "ZOOM",
  "tags": [
   "エフェクター"
  ],
  "isbn": "",
  "url": "https://www.amazon.co.jp/dp/B0CY5DWS46?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "asin:B0CY5DWS46"
 },
 {
  "itemCode": "miyatake-03-01",
  "globalItemNo": 20,
  "shelfCode": "miyatake-03",
  "globalNo": 3,
  "name": "地方を救う 官民共創ビジネス",
  "author": "EYストラテジー・アンド・コンサルティング編",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784296207954",
  "url": "https://www.amazon.co.jp/dp/4296207954?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784296207954"
 },
 {
  "itemCode": "miyatake-03-02",
  "globalItemNo": 21,
  "shelfCode": "miyatake-03",
  "globalNo": 3,
  "name": "「風の谷」という希望 ―残すに値する未来をつくる",
  "author": "安宅和人",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784862763501",
  "url": "https://www.amazon.co.jp/dp/4862763502?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbookfan%2Fbk-4862763502%2F",
  "productKey": "isbn:9784862763501"
 },
 {
  "itemCode": "miyatake-03-03",
  "globalItemNo": 22,
  "shelfCode": "miyatake-03",
  "globalNo": 3,
  "name": "ガザとは何か ―パレスチナを知るための緊急講義",
  "author": "岡真理",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784479394204",
  "url": "https://www.amazon.co.jp/dp/4479394206?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbibelot%2Fbook468%2F",
  "productKey": "isbn:9784479394204"
 },
 {
  "itemCode": "miyatake-03-04",
  "globalItemNo": 23,
  "shelfCode": "miyatake-03",
  "globalNo": 3,
  "name": "核燃料サイクルという迷宮",
  "author": "山本義隆",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784622096979",
  "url": "https://www.amazon.co.jp/dp/4622096978?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784622096979"
 },
 {
  "itemCode": "miyatake-03-05",
  "globalItemNo": 24,
  "shelfCode": "miyatake-03",
  "globalNo": 3,
  "name": "人生が変わるゲームのつくりかた",
  "author": "米光一成",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784480251510",
  "url": "https://www.amazon.co.jp/dp/4480251510?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784480251510"
 },
 {
  "itemCode": "miyatake-03-06",
  "globalItemNo": 25,
  "shelfCode": "miyatake-03",
  "globalNo": 3,
  "name": "ボードゲーム／アナログゲーム関連書（黄色い背表紙）",
  "author": "安藤（名は要確認）",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "productKey": "name:ボードゲーム／アナログゲーム関連書（黄色い背表紙）"
 },
 {
  "itemCode": "miyatake-03-07",
  "globalItemNo": 26,
  "shelfCode": "miyatake-03",
  "globalNo": 3,
  "name": "ゲームカタログ系の1冊（イラスト帯）",
  "author": "",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "productKey": "name:ゲームカタログ系の1冊（イラスト帯）"
 },
 {
  "itemCode": "miyatake-04-01",
  "globalItemNo": 27,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "BLUE GIANT MOMENTUM 8",
  "author": "石塚真一",
  "maker": "",
  "tags": [
   "マンガ"
  ],
  "isbn": "9784098640546",
  "url": "https://www.amazon.co.jp/dp/4098640546?tag=rackscape-22",
  "rakutenUrl": "https://hb.afl.rakuten.co.jp/hgc/59194ab8.a0800231.59194ab9.55c06be8/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F18627931%2F",
  "productKey": "isbn:9784098640546"
 },
 {
  "itemCode": "miyatake-04-02",
  "globalItemNo": 28,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "あかね噺",
  "author": "末永裕樹（原作）／馬上鷹将（作画）",
  "maker": "",
  "tags": [
   "マンガ"
  ],
  "isbn": "9784088831503",
  "url": "https://www.amazon.co.jp/dp/4088831500?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784088831503"
 },
 {
  "itemCode": "miyatake-04-03",
  "globalItemNo": 29,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "めしばな刑事タチバナ（2冊）",
  "author": "坂戸佐兵衛（原作）／旅井とり（作画）",
  "maker": "",
  "tags": [
   "マンガ"
  ],
  "isbn": "9784197804870",
  "url": "https://www.amazon.co.jp/dp/4197804873?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784197804870"
 },
 {
  "itemCode": "miyatake-04-04",
  "globalItemNo": 30,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "DRAFT KING",
  "author": "クロマツテツロウ",
  "maker": "",
  "tags": [
   "マンガ"
  ],
  "isbn": "9784088913339",
  "url": "https://www.amazon.co.jp/dp/4088913337?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784088913339"
 },
 {
  "itemCode": "miyatake-04-05",
  "globalItemNo": 31,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "ミュージック・マガジン 2021年8月号 特集：松本隆",
  "author": "",
  "maker": "",
  "tags": [
   "雑誌"
  ],
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "productKey": "name:ミュージック・マガジン2021年8月号特集：松本隆"
 },
 {
  "itemCode": "miyatake-04-06",
  "globalItemNo": 32,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "R&B馬鹿リリック大行進",
  "author": "",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784905158318",
  "url": "https://www.amazon.co.jp/dp/4905158311?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784905158318"
 },
 {
  "itemCode": "miyatake-04-07",
  "globalItemNo": 33,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "大余談",
  "author": "スチャダラパー",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784845636242",
  "url": "https://www.amazon.co.jp/dp/4845636247?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784845636242"
 },
 {
  "itemCode": "miyatake-04-08",
  "globalItemNo": 34,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "余談 スチャダラパー・シングス",
  "author": "スチャダラパー",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "productKey": "name:余談スチャダラパー・シングス"
 },
 {
  "itemCode": "miyatake-04-09",
  "globalItemNo": 35,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "余談 三代目J余談ブラザーズ",
  "author": "",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "productKey": "name:余談三代目J余談ブラザーズ"
 },
 {
  "itemCode": "miyatake-04-10",
  "globalItemNo": 36,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "余談 シン・ヨダン",
  "author": "",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "productKey": "name:余談シン・ヨダン"
 },
 {
  "itemCode": "miyatake-04-11",
  "globalItemNo": 37,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "風待茶房 松本隆対談集 2005―2015",
  "author": "松本隆",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784845629008",
  "url": "https://www.amazon.co.jp/dp/4845629003?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784845629008"
 },
 {
  "itemCode": "miyatake-04-12",
  "globalItemNo": 38,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "風待茶房 松本隆対談集 1971―2004",
  "author": "松本隆",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784845628995",
  "url": "https://www.amazon.co.jp/dp/4845628996?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784845628995"
 },
 {
  "itemCode": "miyatake-04-13",
  "globalItemNo": 39,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "言葉の教室",
  "author": "松本隆／延江浩",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784838731879",
  "url": "https://www.amazon.co.jp/dp/4838731876?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784838731879"
 },
 {
  "itemCode": "miyatake-04-14",
  "globalItemNo": 40,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "文藝別冊 吉田戦車 大増補新版",
  "author": "",
  "maker": "",
  "tags": [
   "マンガ"
  ],
  "isbn": "9784309979106",
  "url": "https://www.amazon.co.jp/dp/4309979106?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784309979106"
 },
 {
  "itemCode": "miyatake-04-15",
  "globalItemNo": 41,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "文藝別冊 安西水丸",
  "author": "",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784309978437",
  "url": "https://www.amazon.co.jp/dp/4309978436?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784309978437"
 },
 {
  "itemCode": "miyatake-04-16",
  "globalItemNo": 42,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "フリースタイル 40",
  "author": "",
  "maker": "",
  "tags": [
   "雑誌"
  ],
  "isbn": "9784939138935",
  "url": "https://www.amazon.co.jp/dp/4939138933?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784939138935"
 },
 {
  "itemCode": "miyatake-04-17",
  "globalItemNo": 43,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "フリースタイル 62 MANGA 2025",
  "author": "",
  "maker": "",
  "tags": [
   "雑誌"
  ],
  "isbn": "9784867311165",
  "url": "https://www.amazon.co.jp/dp/4867311162?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784867311165"
 },
 {
  "itemCode": "miyatake-04-18",
  "globalItemNo": 44,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "フリースタイル 67",
  "author": "",
  "maker": "",
  "tags": [
   "雑誌"
  ],
  "isbn": "9784867311219",
  "url": "https://www.amazon.co.jp/dp/4867311219?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784867311219"
 },
 {
  "itemCode": "miyatake-04-19",
  "globalItemNo": 45,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "ユリイカ 横尾忠則特集（11月臨時増刊号）",
  "author": "",
  "maker": "",
  "tags": [
   "雑誌"
  ],
  "isbn": "9784791702459",
  "url": "https://www.amazon.co.jp/dp/479170245X?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784791702459"
 },
 {
  "itemCode": "miyatake-04-20",
  "globalItemNo": 46,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "ユリイカ 岡村靖幸特集",
  "author": "",
  "maker": "",
  "tags": [
   "雑誌"
  ],
  "isbn": "9784791702565",
  "url": "https://www.amazon.co.jp/dp/4791702565?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784791702565"
 },
 {
  "itemCode": "miyatake-04-21",
  "globalItemNo": 47,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "ユリイカ 江口寿史特集",
  "author": "",
  "maker": "",
  "tags": [
   "雑誌"
  ],
  "isbn": "9784791703036",
  "url": "https://www.amazon.co.jp/dp/4791703030?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784791703036"
 },
 {
  "itemCode": "miyatake-04-22",
  "globalItemNo": 48,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "ユリイカ みうらじゅん SINCE 1958",
  "author": "",
  "maker": "",
  "tags": [
   "雑誌"
  ],
  "isbn": "9784791703203",
  "url": "https://www.amazon.co.jp/dp/4791703200?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784791703203"
 },
 {
  "itemCode": "miyatake-04-23",
  "globalItemNo": 49,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "文藝別冊 ナンシー関 増補新版",
  "author": "",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784309977829",
  "url": "https://www.amazon.co.jp/dp/4309977820?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784309977829"
 },
 {
  "itemCode": "miyatake-04-24",
  "globalItemNo": 50,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "1冊まるごと、松之丞改め六代目神田伯山（pen BOOKS）",
  "author": "",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "",
  "url": "",
  "rakutenUrl": "",
  "productKey": "name:1冊まるごと、松之丞改め六代目神田伯山（penBOOKS）"
 },
 {
  "itemCode": "miyatake-04-25",
  "globalItemNo": 51,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "藝人春秋 Diary",
  "author": "水道橋博士",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784910547015",
  "url": "https://www.amazon.co.jp/dp/4910547010?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784910547015"
 },
 {
  "itemCode": "miyatake-04-26",
  "globalItemNo": 52,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "どうして人はキスをしたくなるんだろう？",
  "author": "宮藤官九郎／みうらじゅん",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784087441918",
  "url": "https://www.amazon.co.jp/dp/4087441911?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784087441918"
 },
 {
  "itemCode": "miyatake-04-27",
  "globalItemNo": 53,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "人生エロエロ",
  "author": "みうらじゅん",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784163900551",
  "url": "https://www.amazon.co.jp/dp/4163900551?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784163900551"
 },
 {
  "itemCode": "miyatake-04-28",
  "globalItemNo": 54,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "どうやらオレたち、いずれ死ぬっつーじゃないですか",
  "author": "みうらじゅん／リリー・フランキー",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784101274621",
  "url": "https://www.amazon.co.jp/dp/4101274622?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784101274621"
 },
 {
  "itemCode": "miyatake-04-29",
  "globalItemNo": 55,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "官能小説用語表現辞典",
  "author": "永田守弘",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784480422330",
  "url": "https://www.amazon.co.jp/dp/4480422331?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784480422330"
 },
 {
  "itemCode": "miyatake-04-30",
  "globalItemNo": 56,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "時代劇ベスト100＋50",
  "author": "春日太一",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784334787875",
  "url": "https://www.amazon.co.jp/dp/4334787878?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784334787875"
 },
 {
  "itemCode": "miyatake-04-31",
  "globalItemNo": 57,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "藝人春秋（文春文庫）",
  "author": "水道橋博士",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784167903510",
  "url": "https://www.amazon.co.jp/dp/4167903512?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784167903510"
 },
 {
  "itemCode": "miyatake-04-32",
  "globalItemNo": 58,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "天才はあきらめた",
  "author": "山里亮太",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784022619365",
  "url": "https://www.amazon.co.jp/dp/4022619368?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784022619365"
 },
 {
  "itemCode": "miyatake-04-33",
  "globalItemNo": 59,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "タモリ論",
  "author": "樋口毅宏",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784106105272",
  "url": "https://www.amazon.co.jp/dp/4106105276?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784106105272"
 },
 {
  "itemCode": "miyatake-04-34",
  "globalItemNo": 60,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "タモリと戦後ニッポン",
  "author": "近藤正高",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784062883283",
  "url": "https://www.amazon.co.jp/dp/4062883287?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784062883283"
 },
 {
  "itemCode": "miyatake-04-35",
  "globalItemNo": 61,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "スポーツマンガの身体",
  "author": "齋藤孝",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784166603251",
  "url": "https://www.amazon.co.jp/dp/4166603256?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784166603251"
 },
 {
  "itemCode": "miyatake-04-36",
  "globalItemNo": 62,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "衣笠祥雄 最後のシーズン",
  "author": "山際淳司",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784040822655",
  "url": "https://www.amazon.co.jp/dp/404082265X?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784040822655"
 },
 {
  "itemCode": "miyatake-04-37",
  "globalItemNo": 63,
  "shelfCode": "miyatake-04",
  "globalNo": 4,
  "name": "粋な男たち",
  "author": "玉袋筋太郎",
  "maker": "",
  "tags": [
   "エッセイ"
  ],
  "isbn": "9784040822112",
  "url": "https://www.amazon.co.jp/dp/4040822110?tag=rackscape-22",
  "rakutenUrl": "",
  "productKey": "isbn:9784040822112"
 }
];
// [/share:auto]
