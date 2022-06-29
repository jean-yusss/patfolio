import getIcon from '../../utils/getIcon';

const EditorGroupHeader = () => {
	return (
		<div className='flex bg-[#191a21] overflow-x-scroll h-8 items-center'>
			<div className='flex items-center p-2 border-r border-r-[#191a21] bg-[#282a36] cursor-pointer'>
				{getIcon('react')}
				<p className='text-sm p-1.5 font-normal'>Home.tsx</p>
			</div>
			<div className='flex items-center p-2 border-r border-r-[#191a21] bg-[#282a36] cursor-pointer'>
				{getIcon('html')}
				<p className='text-sm p-1.5 font-normal'>About.html</p>
			</div>
			<div className='flex items-center p-2 border-r border-r-[#191a21] bg-[#282a36] cursor-pointer'>
				{getIcon('css')}
				<p className='text-sm p-1.5 font-normal'>Contact.css</p>
			</div>
			<div className='flex items-center p-2 border-r border-r-[#191a21] bg-[#282a36] cursor-pointer'>
				{getIcon('javaScript')}
				<p className='text-sm p-1.5 font-normal'>Projects.js</p>
			</div>
			<div className='flex items-center p-2 border-r border-r-[#191a21] bg-[#282a36] cursor-pointer'>
				{getIcon('json')}
				<p className='text-sm p-1.5 font-normal'>Settings.json</p>
			</div>
		</div>
	);
};

export default EditorGroupHeader;
