import { useState } from 'react';
import { SiCss3, SiHtml5, SiJavascript, SiReact } from 'react-icons/si';
import { VscChevronDown, VscChevronRight, VscEllipsis, VscJson } from 'react-icons/vsc';
import Folder from '../Folder/Folder';

const SideBar = () => {
	const [isOpen, setIsOpen] = useState<Boolean>(true);

	return (
		<div className='h-full w-60 bg-[#21222c] text-[#f8f8f2]'>
			<div className='flex items-center justify-between px-6 py-2'>
				<p className='text-xs font-light'>EXPLORER</p>
				<VscEllipsis className='h-4 w-4 hover:bg-[#44475a75] rounded-sm cursor-pointer' />
			</div>

			<div
				className='flex items-center bg-[#282a36] p-1 space-x-1 cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? (
					<VscChevronDown className='h-4 w-4' />
				) : (
					<VscChevronRight className='h-4 w-4' />
				)}
				<p className='text-xs font-bold'>PATFOLIO</p>
			</div>

			{isOpen && <Folder />}
		</div>
	);
};

export default SideBar;
