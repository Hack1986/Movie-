# 123HDC Web App (GitHub Pages)

เว็บแอปแบบ PWA สำหรับเปิดเว็บไซต์ https://www.123-hdc.com/

## Deploy ด้วย GitHub Pages

1. สร้าง repository ใหม่บน GitHub (แนะนำชื่อ `123hdc-webapp`)
2. อัปโหลดไฟล์และโฟลเดอร์ทั้งหมดใน ZIP นี้เข้าไปที่ root ของ repository
3. กด **Settings → Pages**
4. ในหัวข้อ **Build and deployment** เลือก:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. กด **Save** แล้วรอ GitHub สร้างเว็บไซต์
6. เปิด URL ที่ GitHub Pages แสดงให้ เช่น `https://ชื่อผู้ใช้.github.io/123hdc-webapp/`

## ติดตั้งบน Android

เปิด URL ของ GitHub Pages ด้วย Chrome → เมนู ⋮ → **ติดตั้งแอป** หรือ **เพิ่มลงในหน้าจอหลัก**

## หมายเหตุสำคัญ

- GitHub Pages ให้บริการผ่าน HTTPS จึงรองรับการติดตั้ง PWA
- เว็บแอปนี้เป็นหน้าเริ่มต้น/ทางลัดไปยังเว็บไซต์ต้นทาง ไม่ได้คัดลอกหรือโฮสต์วิดีโอ
- เว็บไซต์ต้นทางอาจปิดกั้นการแสดงผลใน iframe ด้วยนโยบายความปลอดภัย หากเกิดกรณีนี้ให้ใช้ปุ่ม **เปิดเว็บไซต์ 123HDC** ซึ่งจะเปิดเว็บต้นทางในแท็บใหม่
- ไฟล์ `sw.js` แคชเฉพาะไฟล์หน้าตาเว็บแอป ไม่แคชเนื้อหาจากเว็บไซต์ต้นทาง
