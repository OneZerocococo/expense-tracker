# Expense Tracker

### 功能

- 使用者可註冊屬於自己的帳號
- 使用者登入後才可使用網站功能
- 使用者可在首頁一次瀏覽所有支出的清單
- 使用者在首頁看到所有支出清單的總金額
- 使用者可新增、編輯、刪除一筆支出
- 可根據「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和

## 專案畫面

#### 首頁

![首頁](https://github.com/OneZerocococo/expense-tracker/blob/main/public/image/home.jpg)


## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```
4. 環境變數設置：

   ```bash
   SESSION_SECRET=ThisIsMySecret
   mongoose.connect(process.env.MONGODB_URI)
   ```
5. 寫入種子資料：

 ```bash
   npm run seed
   ```

6. 執行專案：

   ```bash
   nodemon app.js
   ```

7. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Express is listening on localhost:3000
   ```

8. 可使用下列兩個種子帳號進行測試
   
   ```bash
   email: hiroshi@example.com
   password: 12345678

   ------------------------------

   User2
   email: shinchan@example.com
   password: 12345678
   ```

9. 若欲暫停使用

   ```bash
   ctrl + c
   ```