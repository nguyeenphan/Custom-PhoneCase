import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { ArrowRight, Check, CheckCheck, Star } from "lucide-react";
import { Icons } from "@/components/Icons";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 
        sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center 
            lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-36 left-0 -top-20 hidden lg:block">
                <Image src="/icon-1.png" alt="pic" width={144} height={144} className="w-full"/>
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 
              font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Hô biến ảnh của bạn lên <span className="bg-amber-500 px-2 py-2 text-white rounded-[0.5rem]">Ốp lưng</span> Độc đáo
                </h1>
                <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                  Lưu giữ kỷ niệm đẹp với ốp lưng <span
                  className="font-semibold">độc nhất</span> của riêng bạn.
                  Casela giúp bạn bảo vệ không chỉ chiếc điện thoại mà cả những ký ức quý giá.
                </p>
                <ul className="mt-8 space-y-2 text-left font-medium flex
                flex-col items-center sm:items-start">
                  <div className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left">
                      <CheckCheck className="h-5 w-5 shrink-0 text-amber-500" strokeWidth={3}/>
                      Chất liệu cao cấp, bền bỉ
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <CheckCheck className="h-5 w-5 shrink-0 text-amber-500" strokeWidth={3}/>
                      Bảo hành in ấn 5 năm
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <CheckCheck className="h-5 w-5 shrink-0 text-amber-500" strokeWidth={3}/>
                      Hỗ trợ các mẫu iPhone hiện đại
                    </li>
                  </div>
                </ul>

                <div className="mt-12 flex flex-col sm:flex-row items-center
                sm:items-start gap-5">
                  <div className="flex -space-x-4">
                    <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    width={40}
                    height={40}
                    alt="user"/>
                    <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    width={40}
                    height={40}
                    alt="user"/>
                    <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    width={40}
                    height={40}
                    alt="user"/>
                    <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.png"
                    width={40}
                    height={40}
                    alt="user"/>
                    <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.png"
                    width={40}
                    height={40}
                    alt="user"/>
                  </div>

                  <div className="flex flex-col justify-between items-center sm:items-start">
                    <div className="flex gap=0.5">
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500"/>
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500"/>
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500"/>
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500"/>
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500"/>
                    </div>
                    <p>
                      <span className="font-semibold">8386</span> khách hàng hài lòng
                    </p>
                  </div>
                </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image src="/your-image.png" alt="" width={208} height={208} className="absolute w-40 lg:w-52 left-56 -top-20 select-none h:block lg:hidden xl:block" />
              <Image src="/line.png" alt="" width={80} height={80} className="absolute w-20 -left-6 -bottom-6 select-none" />
              <Phone className= "w-64 rounded-[2.5rem]" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              <span className="relative px-2">Khách hàng 
                <Icons.underline className="hidden sm:block pointer-events-none 
                absolute inset-x-0 -bottom-6 text-amber-500"/></span>nghĩ gì về Casela
            </h2>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 
          lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-amber-500 fill-amber-500"/>
              <Star className="h-5 w-5 text-amber-500 fill-amber-500"/>
              <Star className="h-5 w-5 text-amber-500 fill-amber-500"/>
              <Star className="h-5 w-5 text-amber-500 fill-amber-500"/>
              <Star className="h-5 w-5 text-amber-500 fill-amber-500"/>
              </div>
              <div className="text-lg leading-8">
                <p>
                &quot;Ốp lưng đẹp xuất sắc, <span className="p-0.5 bg-slate-800 text-white rounded">chất lượng in ấn tốt, bền bỉ</span>, giá cả phải chăng. Mình đã mua nhiều lần và rất hài lòng với chất lượng sản phẩm. Đặc biệt là dịch vụ chăm sóc khách hàng rất tốt.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image src="/users/user-1.png" className="rounded-full h-12 w-12 object-cover" width={48} height={48} alt="" />
                <div className="flex flex-col">
                  <p className="font-semibold">Quynh Anh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-amber-500"/>
                    <p className="text-sm">Đã mua hàng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-amber-500 fill-amber-500"/>
              <Star className="h-5 w-5 text-amber-500 fill-amber-500"/>
              <Star className="h-5 w-5 text-amber-500 fill-amber-500"/>
              <Star className="h-5 w-5 text-amber-500 fill-amber-500"/>
              <Star className="h-5 w-5 text-amber-500 fill-amber-500"/>
              </div>
              <div className="text-lg leading-8">
                <p>
                &quot;Shop phục vụ rất <span className="p-0.5 bg-slate-800 text-white rounded">tận tình, tư vấn nhiệt tình</span>. Ốp lưng đẹp y hình, giao hàng nhanh.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image src="/users/user-5.png" className="rounded-full h-12 w-12 object-cover" width={48} height={48} alt="" />
                <div className="flex flex-col">
                  <p className="font-semibold">Quang Khai</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-amber-500"/>
                    <p className="text-sm">Đã mua hàng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                <span className="relative px-2">Tải ảnh của bạn lên </span>và nhận ngay ốp lưng <span className="bg-amber-500 text-white px-2 rounded-sm">của riêng bạn</span>
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <Image src="/arrow.png" alt="Direction arrow" width={50} height={50} className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 
              z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0" />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm 
              rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <Image src="/car.jpg" alt="Original phone case picture" fill className="rounded-md object-cover bg-white shadow-2xl 
                ring-1 ring-gray-900/10 h-full w-full"/>
              </div>

              <Phone className="w-60 rounded-[37px]" imgSrc="/car_phone.jpg"/>
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-amber-500 inline mr-1.5"/>
              Chất liệu cao cấp, bền bỉ
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-amber-500 inline mr-1.5"/>
              Chống bám mồ hôi, dấu vân tay
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-amber-500 inline mr-1.5"/>
              Tích hợp macsafe, sạc không dây
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-amber-500 inline mr-1.5"/>
              Bảo hành in ấn 2 năm
            </li>

            <div className="flex justify-center">
              <Link className={buttonVariants({
                size: 'lg',
                className: 'mx-auto mt-8'
              })} href={'/configure/upload'}>Triển luôn nào <ArrowRight className="h-4 w-4 ml-1.5"/></Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
