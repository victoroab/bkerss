import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { NotebookPenIcon, Settings, ShoppingBag } from 'lucide-react'
import { PersonalInformation } from './personal-information'
import { SettingsTab } from './settings'
import { Products } from './products'

export default function ProfilePage() {
  return (
    <div className="w-full min-h-80 h-96 flex flex-col flex-1 gap-4 pt-8">
      <h1 className="text-2xl font-semibold">Profile</h1>

      <Tabs defaultValue="bio">
        <TabsList className="">
          <TabsTrigger value="bio" className="flex items-center gap-2">
            <NotebookPenIcon /> Personal Information
          </TabsTrigger>

          <TabsTrigger value="products" className="flex items-center gap-2">
            <ShoppingBag /> Products
          </TabsTrigger>

          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings /> Settings
          </TabsTrigger>
        </TabsList>
        <PersonalInformation />
        <Products />
        <SettingsTab />
      </Tabs>
    </div>
  )
}
