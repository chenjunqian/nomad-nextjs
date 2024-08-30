import { promises as fs } from 'fs';
import projectJson from "@/public/project/lottiejson/project-resource.json";
import Link from 'next/link';

type ProjectDetail = {
    images?: string[],
    leftTopic?: string,
    leftSubTopic?: string,
    rightTopic?: string,
    nextLeftTopic?: string,
    nextLeftSubTopic?: string,
    nextRightTopic?: string
    brand?: string
    date?: string
    service?: string
}

export default async function Page({ params }: { params: { slug: string } }) {

    const projectNumStr = params.slug
    const currentProjectNum = Number(projectNumStr)
    const projectDetailPath = `/public/project/detail/${projectNumStr}/project-detail.json`;
    const file = await fs.readFile(process.cwd() + projectDetailPath);
    let projectDetail: ProjectDetail = JSON.parse(file.toString());

    // get next page info | start
    const projectLottieList = projectJson.LottieOptions;
    const totalProjectNum = projectLottieList.length;
    let nextProjectNum = 1;
    if (currentProjectNum < totalProjectNum) {
        nextProjectNum = currentProjectNum + 1
    }

    let nextProjectNumStr = nextProjectNum.toString();
    if (nextProjectNumStr.length == 1) {
        nextProjectNumStr = "0" + nextProjectNumStr
    }
    const nextProjectDetailPath = `/public/project/detail/${nextProjectNumStr}/project-detail.json`;
    const nextProjectDetailFile = await fs.readFile(process.cwd() + nextProjectDetailPath);
    let nextProjectDetail: ProjectDetail = JSON.parse(nextProjectDetailFile.toString());
    projectDetail.nextLeftTopic = nextProjectDetail.leftTopic
    projectDetail.nextLeftSubTopic = nextProjectDetail.leftSubTopic
    projectDetail.nextRightTopic = nextProjectDetail.rightTopic
    // get next page info | end

    return (
        <div className="w-full pr-7 pl-7 pt-9">
            <div className='w-full md:flex'>
                {/* left topic */}
                <div className="md:w-2/5 w-full flex md:justify-start justify-center">
                    <div className="md:text-start text-center">
                        <div className="md:text-3xl text-base">{projectDetail.leftTopic}</div>
                        <div className="md:text-sm text-xs mt-9 text-gray-300">{projectDetail.leftSubTopic}</div>
                    </div>
                </div>
                <div className='md:w-1/5'></div>
                {/* right description */}
                <div className="md:w-2/5 w-full flex md:justify-end justify-center md:mt-0 mt-9">
                    <div className="text-start">
                        <div className="md:text-sm text-xs">{projectDetail.rightTopic}</div>
                    </div>
                </div>
            </div>
            {/* project detail description */}
            <div className='w-full md:flex mt-16 md:text-sm text-xs'>
                <div className='md:w-2/5 w-full flex md:justify-end justify-start'>
                    <div className='md:w-full md:text-end w-1/2'>项目详情</div>
                </div>
                <div className='md:w-1/5'></div>
                <div className='md:w-2/5 w-ful flex md:justify-end justify-start md:mt-0 mt-4'>
                    <div className='md:w-full w-1/2'>
                        <div className='border-b w-full flex justify-start'>
                            <div className='w-1/4'>品牌</div>
                            <div className='w-3/4'>{projectDetail.brand}</div>
                        </div>
                        <div className='border-b w-full flex justify-start mt-2'>
                            <div className='w-1/4'>年份</div>
                            <div className='w-3/4'>{projectDetail.date}</div>
                        </div>
                        <div className='border-b w-full flex justify-start mt-2'>
                            <div className='w-1/4'>服务</div>
                            <div className='w-3/4'>{projectDetail.service}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* project images */}
            <div className='grid grid-cols-1 gap-4 mt-32'>
                {
                    projectDetail.images?.map((image, index) => {
                        const isVideo = image.endsWith(".mp4")
                        return (
                            <div key={index} className='w-full'>
                                {
                                    isVideo ? <video className="w-full" src={image} autoPlay loop muted playsInline></video>
                                        : <img src={image} className="w-full" />
                                }
                            </div>
                        )
                    })
                }
            </div>
            {/* next page component */}
            <div className='w-full mt-36'>
                <div className='w-full flex md:justify-start justify-center'>
                    <Link className='hover:cursor-pointer' href={`/project/detail/${nextProjectNumStr}`}>
                        <div className='md:block w-full flex justify-center'>
                            <img src="/icons/down-arrow.png" className="md:w-10 w-6 h-auto" />
                        </div>
                        <div className='text-3xl mt-4 text-extra-red'>Next</div>
                    </Link>
                </div>
                <div className='w-full md:flex mt-16'>
                    {/* next page left topic */}
                    <div className="md:w-2/5 w-full flex md:justify-start justify-center">
                        <div className="md:text-start text-center">
                            <div className="md:text-2xl text-base">{projectDetail.nextLeftTopic}</div>
                        </div>
                    </div>
                    <div className='md:w-1/5'></div>
                    {/* next page right description */}
                    <div className="md:w-2/5 w-full flex md:justify-end justify-center md:mt-0 mt-9">
                        <div className="text-start">
                            <div className="md:text-sm text-xs">{projectDetail.nextRightTopic}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}