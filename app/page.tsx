import { ProjectThumbnailView } from "@/components/project-thumbnail-view";
import projectJson from "@/public/project/lottiejson/project-resource.json";

export default function Home() {

    const projectLottieList = projectJson.LottieOptions;

    return (
        <div className="w-full flex justify-center">
            <div className="w-full pl-6 pr-6">
                <div className="text-center mb-9 mt-9 md:text-2xl text-sm font-light">
                    <div>
                        We build connections
                    </div>
                    <div>
                        among brand, people and planet.
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {
                        projectLottieList.toReversed().map((item, index) => {
                            return <ProjectThumbnailView key={index} routerPath={item.routerPath} thumbnailPath={item.thumbnailPath} videoPath={item.videoPath} animationData={item.animationData} />
                        })
                    }               
                </div>
            </div>
        </div>
    );
}
