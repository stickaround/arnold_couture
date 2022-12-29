import { IconType } from 'react-icons'
import { FaLinkedin, FaGithub, FaEnvelope, FaTelegram } from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/arnold-couture',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/stickaround',
    icon: FaGithub,
  },
  {
    label: 'Email',
    href: 'mailto:arnoldcouture72@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/stickaroundhere',
    icon: FaTelegram,
  },
]
