"use client"

import Phone from '@/components/Phone';
import { Button } from '@/components/ui/button';
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products';
import { cn, formatPrice } from '@/lib/utils';
import { COLORS, FINISHES, MODELS } from '@/validators/option-validator';
import { Configuration } from '@prisma/client'
import { ArrowRight, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti'

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
    const config = {
        angle: 90,
        spread: 200,
        startVelocity: 60,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 4000,
        stagger: 3,
        width: "20px",
        height: "20px",
        perspective: "564px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    const [showConfetti, setShowConfetti] = useState(false);
    useEffect(() => setShowConfetti(true), []);

    const rounter = useRouter()
    const { color, model, finish, material } = configuration;
    const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw!;

    const { label: modelLabel } = MODELS.options.find(({ value }) => value === model)!;

    let totalPrice = BASE_PRICE;
    if (material === 'carbonfiber') {
        totalPrice += PRODUCT_PRICES.material.carbonfiber;
    }
    if (finish === 'textured') {
        totalPrice += PRODUCT_PRICES.finish.textured;
    }

    return (
        <>
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center">
                <Confetti active={showConfetti} config={config} />
            </div>

            <div className="mt-20 flex flex-col items-center md:grid text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
                    <Phone 
                        className={cn(`bg-${tw}`, 'max-w-[150px] md:max-w-full rounded-[2.4rem]')} 
                        imgSrc={configuration.croppedImageUrl!} 
                    />
                </div>

                <div className="mt-6 sm:col-span-9 md:row-end-1">
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                        Ốp lưng {modelLabel} của bạn
                    </h3>
                    <div className="mt-3 flex items-center gap-1.5 text-base">
                        <Check className="h-4 w-4 text-green-600" />
                        Có sẵn và sẵn sàng giao hàng
                    </div>
                </div>

                <div className="sm:col-span-12 md:col-span-9 text-base">
                    <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                        <div>
                            <p className="font-medium text-zinc-950">Điểm nổi bật</p>
                            <ol className="mt-3 text-zinc-700 list-disc list-inside">
                                <li>Tương thích sạc không dây</li>
                                <li>Chống sốc tốt</li>
                                <li>Bao bì làm từ vật liệu tái chế</li>
                                <li>Bảo hành in 2 năm</li>
                            </ol>
                        </div>
                        <div>
                            <p className="font-medium text-zinc-950">Vật liệu</p>
                            <ol className="mt-3 text-zinc-700 list-disc list-inside">
                                <li>Vật liệu chất lượng cao, bền bỉ</li>
                                <li>Lớp phủ chống xước và dấu vân tay</li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="bg-gray-50 p-6 rounded-lg sm:p-8">
                            <div className="flow-root text-sm">
                                <div className="flex items-center justify-between py-1 mt-2">
                                    <p className="text-gray-600">Giá gốc</p>
                                    <p className="font-medium text-gray-900">
                                        {formatPrice(BASE_PRICE / 100)}
                                    </p>
                                </div>

                                {finish === "textured" && (
                                    <div className="flex items-center justify-between py-1 mt-2">
                                        <p className="text-gray-600">Textured finish</p>
                                        <p className="font-medium text-gray-900">
                                            {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                                        </p>
                                    </div>
                                )}

                                {material === "carbonfiber" && (
                                    <div className="flex items-center justify-between py-1 mt-2">
                                        <p className="text-gray-600">Carbon fiber</p>
                                        <p className="font-medium text-gray-900">
                                            {formatPrice(PRODUCT_PRICES.material.carbonfiber / 100)}
                                        </p>
                                    </div>
                                )}

                                <div className="my-2 h-px bg-gray-200" />

                                <div className="flex items-center justify-between py-2">
                                    <p className="font-semibold text-gray-900">Order total</p>
                                    <p className="font-semibold text-gray-900">
                                        {formatPrice(totalPrice / 100)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end pb-12">
                            <Button
                                onClick={() => rounter.push(`/`)}
                                className="px-4 sm:px-6 lg:px-8">
                                Xong <ArrowRight className="h-4 w-4 ml-1.5 inline" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DesignPreview;
