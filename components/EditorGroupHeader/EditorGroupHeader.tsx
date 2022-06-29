import { VscJson } from 'react-icons/vsc';
import { SiCss3, SiHtml5, SiJavascript, SiReact } from 'react-icons/si';

const EditorGroupHeader = () => {
	return (
		<div className='flex bg-[#191a21] overflow-x-scroll h-8 items-center'>
			<div className='flex items-center p-2 border-r border-r-[#191a21] bg-[#282a36] cursor-pointer'>
				<SiReact className='h-4 w-4 text-[#007acc]' />
				<p className='text-sm p-1.5 font-normal'>Home.tsx</p>
			</div>
			<div className='flex items-center p-2 border-r border-r-[#191a21] bg-[#282a36] cursor-pointer'>
				<SiHtml5 className='h-4 w-4 text-[#e34c26]' />
				<p className='text-sm p-1.5 font-normal'>About.html</p>
			</div>
			<div className='flex items-center p-2 border-r border-r-[#191a21] bg-[#282a36] cursor-pointer'>
				<SiCss3 className='h-4 w-4 text-[#2965f1]' />
				<p className='text-sm p-1.5 font-normal'>Contact.css</p>
			</div>
			<div className='flex items-center p-2 border-r border-r-[#191a21] bg-[#282a36] cursor-pointer'>
				<SiJavascript className='h-4 w-4 text-[#f0db4f]' />
				<p className='text-sm p-1.5 font-normal'>Projects.js</p>
			</div>
			<div className='flex items-center p-2 border-r border-r-[#191a21] bg-[#282a36] cursor-pointer'>
				<VscJson className='h-4 w-4 text-[#f0db4f]' />
				<p className='text-sm p-1.5 font-normal'>Settings.json</p>
			</div>
		</div>
	);
};

export default EditorGroupHeader;
