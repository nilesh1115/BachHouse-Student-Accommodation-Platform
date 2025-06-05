import Link from 'next/link';

export default function CTAButton({ text, href, variant = 'primary', icon }) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium text-lg transition-colors duration-300 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    white: 'bg-white text-blue-700 hover:bg-gray-100',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-blue-700'
  };

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </Link>
  );
}