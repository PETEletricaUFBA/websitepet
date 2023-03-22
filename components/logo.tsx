import Image from '../lib/Image'

export default function Logo() {
    return <div className="img-fluid ">
        <Image src="/images/logo.png"
            layout="responsive"
            width="100%"
            height="30%"
            objectFit="scale-down"
            alt="PET Elétrica UFBA" />
    </div>
}