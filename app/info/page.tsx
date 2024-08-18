

export default function Page() {
    return (
        <div className="w-full pr-7 pl-7">
            <div className="mt-28 md:text-xl text-lg" style={{ fontFamily: 'source-han-sans-simplified-c, sans-serif', fontWeight: '400' }}>
                <div className="w-3/4 text-start ">
                    我们是额外叙事Extra Narrative，一家小型多元创意型设计工作室，2017年成立于上海，为海内外领先客户提供设计服务。
                </div>
                <div className="w-3/4 text-start mt-2">
                    我们将围绕情感体验与制造惊喜，致力于为客户解决难点，创造经得起时间的考验、具有功能性的设计，透过设计为品牌传达核心价值，与消费者建立连接，完善产品体验。
                </div>
            </div>

            <div className="mt-28 w-full">
                <div className="w-full md:flex border-b">
                    <div className="md:w-1/2 w-full md:flex md:text-start text-center md:text-xl text-lg md:mb-0 mb-4">Client</div>
                    <div className="md:w-1/2 w-full flex md:justify-start justify-center mb-14">
                        <div className="w-full grid grid-cols-4 gap-4">
                            <img className="w-20 h-auto items-center" src="/images/tmall.png" alt="tmall" />
                            <img className="w-20 h-auto" src="/images/dingding.png" alt="dingding" />              <img className="w-20 h-auto" src="/images/taobao.png" alt="taobao" />
                            <img className="w-20 h-auto" src="/images/alibaba.png" alt="alibaba" />
                            <img className="w-20 h-auto" src="/images/flypigg.png" alt="flypigg" />
                            <img className="w-20 h-auto" src="/images/starbucks.png" alt="starbucks" />
                            <img className="w-20 h-auto" src="/images/honeywell.png" alt="honeywell" />
                            <img className="w-20 h-auto" src="/images/alihealth.png" alt="alihealth" />
                            <img className="w-20 h-auto" src="/images/dhl.png" alt="dhl" />
                            <img className="w-20 h-auto" src="/images/bershka.png" alt="bershka" />
                            <img className="w-20 h-auto" src="/images/EF.png" alt="EF" />
                            <img className="w-20 h-auto" src="/images/tengxun.png" alt="tengxun" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:flex mt-6 border-b">
                    <div className="md:w-1/2 w-full md:flex md:text-start text-center md:text-xl text-lg md:mb-0 mb-4">Award</div>
                    <div className="md:w-1/2 w-full flex md:justify-start justify-center mb-14">
                        <div className="md:w-3/4" style={{ fontFamily: 'source-han-sans-simplified-c, sans-serif', fontWeight: '400' }}>
                            <p>2022 APD 18 Asia-Pacific Design</p>
                            <p>2022 站酷大设计奖</p>
                            <p>2023 APD 19 Asia-Pacific Design</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:flex mt-6 border-b">
                    <div className="md:w-1/2 w-full md:flex md:text-start text-center md:text-xl text-lg md:mb-0 mb-4">Press</div>
                    <div className="md:w-1/2 w-full flex md:justify-start justify-center mb-14">
                        <div className="md:w-3/4" style={{ fontFamily: 'source-han-sans-simplified-c, sans-serif', fontWeight: '400' }}>
                            <p>2020 InspoFindsCollectionII</p>
                            <p>2020 Brand 创意呈现7</p>
                            <p>2021 Brand 创意呈现8</p>
                            <p>2021 PRINTmag</p>
                            <p>2022 Behance专题刊登</p>
                            <p>2024 设计与工艺</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:flex mt-6">
                    <div className="md:w-1/2 w-full md;flex md:text-start text-center md:text-xl text-lg md:mb-0 mb-4">Service</div>
                    <div className="md:w-1/2 w-full flex md:justify-start justify-center mb-14">
                        <div className="md:w-3/4" style={{ fontFamily: 'source-han-sans-simplified-c, sans-serif', fontWeight: '400' }}>
                            <p>品牌全案策划</p>
                            <p>品牌视觉设计</p>
                            <p>包装设计</p>
                            <p>平面物料设计</p>
                            <p>插画</p>
                            <p>动态视觉设计</p>
                            <p>商业动画短片</p>
                            <p>打样生产</p>
                    </div>
                </div>

            </div>
        </div>
    )
}