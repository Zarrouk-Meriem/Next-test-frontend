import Image from "next/image";
import { formatStudentNumber, getImageUrl } from "../../_lib/utils";
import type { CourseProps } from "../../_types/coursesSection";
import { getTagColor } from "../../_lib/getTagColor";
import Tag from "./Tag";
import Rating from "./Rating";

function Course({
	course,
	studentIcon,
}: {
	course: CourseProps;
	studentIcon?: boolean;
}) {
	const { courseName, tag, rating, enrolledStudents, price, image } = course;
	const colorTag = getTagColor(tag);
	return (
		<div className='flex flex-col gap-[14px]  w-[244px] h-[333px] text-[#4E5566]  '>
			{image && (
				<Image
					alt={image?.alternativeText ?? "alternative text"}
					width={244}
					height={183}
					src={getImageUrl(String(image?.url))}
					quality={100}
				/>
			)}
			<div className='flex flex-col border border-[#E9EAF0] border-t-0'>
				<div className='gap-[8px] flex flex-col p-[14px] pt-0 text-[14px] '>
					<div className='flex  gap-[67px] items-center justify-between'>
						<Tag tag={tag} colorTag={colorTag} />
						<span className='text-[#FF6636]  text-[16px] font-[600]'>
							${price}
						</span>
					</div>
					<p className='  text-[#1D2026] text-[14px] leading-[20px] font-[500]'>
						{courseName}
					</p>
				</div>
				<div className='py-[14px] px-[18px] border-t border-t-[#E9EAF0] flex gap-[67px] items-center justify-between'>
					<Rating rating={rating} />
					<p className=' font-[500] whitespace-nowrap flex items-center gap-[6px]  '>
						{studentIcon && (
							<Image
								src={"/assets/icons/User.svg"}
								alt='user'
								height={20}
								width={20}
							/>
						)}
						{formatStudentNumber(enrolledStudents)}
						<span className=' text-[#8C94A3] font-light'> students</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Course;
