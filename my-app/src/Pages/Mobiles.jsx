import Card from "../Reusable/Card"
import { useNavigate } from "react-router-dom"




function Mobiles() {

    const naV = useNavigate()


    const handleClickH = () => {
    
        naV("/")
    }
    
    const handleClickP = () => {
    
        naV("/product")
    }

  return (
    <>


<div className="flex flex-row gap-2 m-4"> 

<button className=" top-0.5 font-semibold text-white border-2 font-sans bg-[#001F3F] rounded-lg p-2" onClick={handleClickH}>Home</button>

<button className=" top-0.5 font-semibold text-white border-2 font-sans bg-[#001F3F] rounded-lg p-2" onClick={handleClickP}>Back to categories</button>
</div>

<br/>

    <div className="grid grid-cols-2 gap-6 m-4 p-2 sm:grid-cols-3"> 
    <Card ButtonName={"Add to Cart"} Prouctname={"Apple iPhone 15 Pro Max"} ProductDescription={"Features a 6.7-inch Super Retina XDR display, Dynamic Island, Always-On display, and a powerful pro camera system."} Price={"$820.80"} ImageUrl={"https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.xlarge_2x.jpg"}/>
    <Card ButtonName={"Add to Cart"} Prouctname={"Samsung Galaxy S24 Ultra"} ProductDescription={"Boasts a 6.8-inch display, titanium build, built-in S Pen, and advanced AI-powered camera enhancements."} Price={"$1,299.99"} ImageUrl={"https://images.samsung.com/is/image/samsung/assets/us/2501/pcd/smartphones/galaxy-s24-ultra/galaxy-S24-ultra-ft02-kv_DT.jpg?$1440_N_JPG$"}/>
    <Card ButtonName={"Add to Cart"} Prouctname={"Google Pixel 8 Pro"} ProductDescription={"Equipped with a 6.7-inch display, advanced AI features, and a high-resolution camera system for exceptional photography."} Price={"$999"} ImageUrl={"https://lh3.googleusercontent.com/jrQ1s9jeJ_9FQosXaJhkoTj-y03jUplYtRsVtHWGlRuWb4Uu43VQpTT318kWS6rz64Z1478yyioRPO-ZzJqTg5nox-DzMyJEdA=rw-e365-w3000"}/>
    <Card ButtonName={"Add to Cart"} Prouctname={"OnePlus 12"} ProductDescription={"Features a sleek design with a 6.82-inch OLED display, Snapdragon 8 Gen3 processor, and a high-quality camera system."} Price={"$799.99"} ImageUrl={"https://image01.oneplus.net/media/202405/28/e2566b9853071dbb7fe9306713bbe51f.png?x-amz-process=image/format,webp/quality,Q_80"}/>
    <Card ButtonName={"Add to Cart"} Prouctname={"Xiaomi 14 Ultra"} ProductDescription={"Offers a 6.73-inch display, advanced camera capabilities, and robust performance with Snapdragon 8 Gen3 processor."} Price={"$1,045"} ImageUrl={"https://i02.appmifile.com/mi-com-product/fly-birds/new-xiaomi-14-ultra/PC/pc-14ultra-header.jpg?f=webp"}/>
    <Card ButtonName={"Add to Cart"} Prouctname={"Realme GT 5 Pro"} ProductDescription={"Comes with a 6.78-inch AMOLED display, Snapdragon 8 Gen3 processor, and a 50MP main camera for high-quality photos."} Price={"€430"} ImageUrl={"https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/h/25/e63a2669-4ddd-4d8f-945f-9ca8abe8ea02.jpg"}/>
    <Card ButtonName={"Add to Cart"} Prouctname={"Asus ROG Phone 8"} ProductDescription={"Designed for gamers with a 6.78-inch 165Hz AMOLED display, Snapdragon 8 Gen3 processor, and a 5500mAh battery"} Price={" $1,199.99"} ImageUrl={"https://dlcdnwebimgs.asus.com/files/media/384F2C81-368E-4733-889E-0D3C3E239982/v1/features/images/large/2x/kv/phone_left.webp"}/>
    <Card ButtonName={"Add to Cart"} Prouctname={"Sony Xperia 1 V"} ProductDescription={"Features a next-generation Exmor T sensor for enhanced low-light photography and a 6.5-inch 4K display."} Price={"$799.99"} ImageUrl={"https://m.media-amazon.com/images/I/81YofuHBMZL._AC_SL1500_.jpg"}/>
    <Card ButtonName={"Add to Cart"} Prouctname={"Nothing Phone (2a)"} ProductDescription={"Offers a 6.7-inch AMOLED display, Dimensity 7200 Pro processor, and a 50MP dual-camera system."} Price={"$349"} ImageUrl={"https://bsimg.nl/images/nothing-phone-2a-256gb-wit_6.png/6MMMF64Hq9xsuiSAt_VmKnTxxJo%3D/fit-in/771x1200/filters%3Aformat%28webp%29%3Aupscale%28%29"}/>

    </div>
    
    </>
  )
}

export default Mobiles