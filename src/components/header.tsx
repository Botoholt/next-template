import { Locale } from "@/shared/config/i18n.config"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { LocaleSwitcher } from "./locale-switcher"
import { ThemeSwitcher } from "./theme-switcher"

export function Header() {
  const t = useTranslations("Header")
  const locale = useLocale() as Locale

  return (
    <header className="bg-primary">
      <section className="container mx-auto flex items-center justify-between py-2">
        <div className="flex flex-row items-center gap-2">
          <Image src="/favicon/rv-icon.svg" width={32} height={32} alt="Logo" />
          <h1 className="text-xl font-medium tracking-[0.02rem] text-white">{t("title")}</h1>
        </div>
        <div className="flex-center gap-2">
          <ThemeSwitcher />
          <LocaleSwitcher locale={locale} />
        </div>
      </section>
    </header>
  )
}
