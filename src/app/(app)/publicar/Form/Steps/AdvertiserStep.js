
import Input from "@/components/Inputs/Base/Input";
import Checkbox from "@/components/Inputs/Checkbox";
import { toast } from 'react-toastify';

export default function AdvertiserStep({ form,user }) {
    const { register, getValues ,formState: { errors } } = form;
    
    const setAdvertiserInfo = (e) => {
        
        if (e.target.checked) {
            form.setValue("social_links",user?.social_links || {});
          
            if(!user?.phone_number){
                toast.error('No tienes un número de teléfono asociado a tu perfil. Por favor, completa tu perfil para continuar.');
                return;
            };

            form.setValue("phone", user?.phone_number || "");
        }else{
            form.setValue("social_links.instagram", "");
            form.setValue("social_links.facebook", "");
            form.setValue("social_links.tiktok", "");
            form.setValue("phone", "");
        }
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
          
            <Input
                id="phone"
                label="Teléfono"
                placeholder="0412-1234567"
                icon="LuPhone"
                hideLabel={false}
                numericOnly
                required
                {...register("phone")}
                errors={errors.phone?.message}
            />
            <Input
                {...register("social_links.instagram")}
                errors={errors.social_links?.instagram?.message}
                id="instagram"
                label="Instagram"
                placeholder="https://instagram.com/mi-perfil"
                icon="Instagram"
                hideLabel={false}
                
            />
            <Input
                {...register("social_links.facebook")}
                errors={errors.social_links?.facebook?.message}
                id="facebook"
                label="Facebook"
                placeholder="https://facebook.com/mi-perfil"
                icon="Facebook"
                hideLabel={false}
            />
            <Input
                {...register("social_links.tiktok")}
                errors={errors.social_links?.tiktok?.message}
                id="tiktok"
                label="TikTok"
                placeholder="https://tiktok.com/@mi-perfil"
                icon="Tiktok"
                hideLabel={false}
            />
          {/*   <Input
                {...register("social_links.video_url")}
                errors={errors.social_links?.video_url?.message}
                id="video-url"
                label="Video relacionado (YouTube)"
                placeholder="https://youtube.com/mi-video"
                icon="Youtube"
                hideLabel={false}
                
            /> */}
           
            <Checkbox onChange={setAdvertiserInfo} label="Usar información de mi perfil"/>
        </div>
    )
}