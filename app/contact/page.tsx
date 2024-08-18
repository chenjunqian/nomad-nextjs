
export default function Page() {

    return (
        <div className="w-full pr-7 pl-7">
            <div className="w-full mt-28 md:text-xl text-lg">
                <div className="w-3/4 text-start">
                    我们是额外叙事 EXTRA NARRATIVE，一家小型多元创意型设计工作室，为海内外领先客户提供设计服务。
                </div>
                <div className="w-3/4 text-start mt-2">
                    我们将围绕情感体验与制造惊喜，致力于为客户解决难点，创造经得起时间考验、具有功能性的设计，透过设计为品牌传达核心价值，与消费者建立连接，完善产品体验。
                </div>
            </div>
            <div className="mt-28 w-full">
                <div className="w-full md:flex justify-center">
                    <div className="w-1/4"></div>
                    <div className="md:w-1/4 w-full md:flex md:text-start text-center md:text-xl text-lg">Consult</div>
                    <div className="md:w-1/2 w-full md:flex md:text-start text-center md:text-lg text-base md:mt-0 mt-4">extranarrative@foxmail.com</div>
                </div>
                <div className="w-full md:flex justify-center mt-16">
                    <div className="w-1/4"></div>
                    <div className="md:w-1/4 w-full md:flex md:text-start text-center md:text-xl text-lg">Social Media</div>
                    <div className="md:w-1/2 w-full flex md:justify-start justify-center md:text-lg text-base md:mt-0 mt-4">
                        We are on&ensp;<a href="https://behance.net" className="text-gray-500 hover:underline hover:text-extra-red">Behance</a>, <a href="https://instagram.com" className="text-gray-500 hover:underline hover:text-extra-red">Instagram</a>, <a href="https://gtn9.com" className="text-gray-500 hover:underline hover:text-extra-red">gtn9</a>
                    </div>
                </div>
                <div className="w-full md:flex justify-center mt-2">
                    <div className="w-1/2"></div>
                    <div className="md:w-1/2 w-full flex md:justify-start justify-center">
                        <div className="md:w-1/2 w-full">
                            <div className="md:text-xl text-lg w-full md:text-start text-center">微信公众号</div>
                            <div className="md:block flex md:justify-start justify-center">
                                <img className="w-32 h-auto md:-ml-2" src="/icons/qrcode.jpg" alt="wechat" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:flex justify-center mt-20 mb-48">
                    <div className="w-1/4"></div>
                    <div className="md:w-1/4 w-full md:flex md:text-start text-center md:text-xl text-lg">Address</div>
                    <div className="md:w-1/2 w-full flex md:justify-start justify-center md:text-lg text-base">
                        <div className="md:text-base text-sm md:mt-0 mt-4">
                            <div className="w-full md:text-start text-center">EXTRA NARRATIVE</div>
                            <div className="w-full md:text-start text-center">上海市 青浦区 淀山湖大道 3699弄</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}