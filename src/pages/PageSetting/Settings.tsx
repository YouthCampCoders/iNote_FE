import  styles  from './Settings.module.less'

const Settings=()=>{
    return (
        <div className={styles['setting']}>
            <SettingItem children={<div>setting1</div>}/>
            <SettingItem children={<div>setting2</div>}/>
            <SettingItem children={<div>setting3</div>}/>
        </div>
    )
}

export default Settings

const SettingItem:React.FC=({children})=>{
    return (
        <div className={styles['Setting__item']}>
            {children}
        </div>
    )
}