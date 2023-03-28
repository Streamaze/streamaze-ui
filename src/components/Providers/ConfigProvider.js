import { useLocalStorage } from '@mantine/hooks'
import { createContext } from 'react'
import { useSearchParams } from 'react-router-dom'
export const ConfigContext = createContext()

const ConfigProvider = ({ children }) => {
  // Chat config
  const [chatConfig, setChatConfig] = useLocalStorage({
    key: 'chat-sources',
    getInitialValueInEffect: false,
    defaultValue: {
      configName: 'example',
      twitch: {
        enabled: false,
        username: '',
      },
      tiktok: {
        enabled: false,
        username: '',
      },
      youtube: {
        enabled: false,
        channel: '',
      },
      kick: {
        enabled: false,
        chatroomId: '',
        channelId: '',
      },
    },
  })

  // OBS config
  const [obsConfig, setObsConfig] = useLocalStorage({
    key: 'obs-config',
    getInitialValueInEffect: false,
    defaultValue: {
      streamChannelId: 'bondctrl:sam',
    },
  })

  // StatCard config
  const [statsConfig, setStatsConfig] = useLocalStorage({
    key: 'stats-config',
    getInitialValueInEffect: false,
    defaultValue: {
      tiktokUsername: '',
      twitchUsername: '',
      youtubeChannel: '',
      kickChannelName: '',
    },
  })

  // Timestamp config
  const [timestampConfig, setTimestampConfig] = useLocalStorage({
    key: 'timestamp-config',
    getInitialValueInEffect: false,
    defaultValue: {
      discordChannelId: '',
      youtubeChannel: '',
    },
  })

  // Donations config
  const [slobsConfig, setSlobsConfig] = useLocalStorage({
    key: 'streamlabs-config',
    getInitialValueInEffect: false,
    defaultValue: {
      streamToken: '',
      ttsVoice: 'Ivy',
      tiktokUsername: '',
      silentAudioInterval: '10',
    },
  })

  // Keypad config
  const [keypadConfig, setKeypadConfig] = useLocalStorage({
    key: 'keypad-config',
    getInitialValueInEffect: false,
    defaultValue: {
      code: '',
    },
  })

  // Lanyard config
  const [lanyardConfig, setLanyardConfig] = useLocalStorage({
    key: 'lanyard-config',
    getInitialValueInEffect: false,
    defaultValue: {
      discordUserId: '',
      apiKey: '',
    },
  })

  // Currency config
  const [currencyConfig, setCurrencyConfig] = useLocalStorage({
    key: 'currency-config',
    getInitialValueInEffect: false,
    defaultValue: {
      currency: 'usd',
    },
  })

  // Subathon config
  const [subathonConfig, setSubathonConfig] = useLocalStorage({
    key: 'subathon-config',
    getInitialValueInEffect: false,
    defaultValue: {
      timeUnitBase: 1,
      isSubathonActive: false,
    },
  })

  // User config
  const [userConfig, setUserConfig] = useLocalStorage({
    key: 'user-config',
    getInitialValueInEffect: false,
    defaultValue: {
      streamerId: '',
      streamazeKey: '',
    },
  })

  const [searchParams] = useSearchParams()
  const isChat = searchParams.get('isChat') === 'true'
  const isObs = searchParams.get('isObs') === 'true'
  const isStats = searchParams.get('isStats') === 'true'
  const isClip = searchParams.get('isClip') === 'true'
  const isSlobs = searchParams.get('isSlobs') === 'true'
  const isKeypad = searchParams.get('isKeypad') === 'true'
  const isLanyard = searchParams.get('isLanyard') === 'true'
  const isUser = searchParams.get('isUser') === 'true'

  // Load chat config from URLs
  let tiktokChat = ''
  let youtubeChat = ''
  let twitchChat = ''
  let kickChatroomId = ''
  let kickChannelId = ''
  if (isChat) {
    if (searchParams.get('tiktokChat')) {
      tiktokChat = searchParams.get('tiktokChat')
    }

    if (searchParams.get('youtubeChat')) {
      youtubeChat = searchParams.get('youtubeChat')
    }

    if (searchParams.get('twitchChat')) {
      twitchChat = searchParams.get('twitchChat')
    }

    if (searchParams.get('kickChatroomId')) {
      kickChatroomId = searchParams.get('kickChatroomId')
    }

    if (searchParams.get('kickChannelId')) {
      kickChannelId = searchParams.get('kickChannelId')
    }
  }

  // Load OBS config from URLs
  let obsChannel = ''
  if (isObs) {
    if (searchParams.get('obsChannel')) {
      obsChannel = searchParams.get('obsChannel')
    }
  }

  // Load stats config from URLs
  let tiktokStats = ''
  let youtubeStats = ''
  // let twitchStats = ''
  let kickStats = ''
  if (isStats) {
    if (searchParams.get('tiktokStats')) {
      tiktokStats = searchParams.get('tiktokStats')
    }

    if (searchParams.get('youtubeStats')) {
      youtubeStats = searchParams.get('youtubeStats')
    }

    // TODO: Add Twitch viewer count
    // if (searchParams.get('twitchStats')) {
    //   twitchStats = searchParams.get('twitchStats')
    // }

    if (searchParams.get('kickStats')) {
      kickStats = searchParams.get('kickStats')
    }
  }

  // Load timestamp config from URLs
  let discordTimestamp = ''
  let youtubeTimestamp = ''
  if (isClip) {
    if (searchParams.get('clipDiscord')) {
      discordTimestamp = searchParams.get('clipDiscord')
    }

    if (searchParams.get('clipYT')) {
      youtubeTimestamp = searchParams.get('clipYT')
    }
  }

  // Load Streamlabs config from URLs
  let streamToken = ''
  let ttsVoice = ''
  let tiktokDonos = ''
  if (isSlobs) {
    if (searchParams.get('streamToken')) {
      streamToken = searchParams.get('streamToken')
    }

    if (searchParams.get('ttsVoice')) {
      ttsVoice = searchParams.get('ttsVoice')
    }

    if (searchParams.get('tiktokDonos')) {
      tiktokDonos = searchParams.get('tiktokDonos')
    }
  }

  // Load Keypad config from URL
  let keypadCode = ''
  if (isKeypad) {
    if (searchParams.get('keypadCode')) {
      keypadCode = searchParams.get('keypadCode')
    }
  }

  // Load Lanyard config from URL
  let discordUserId = ''
  let apiKey = ''
  if (isLanyard) {
    if (searchParams.get('discordUserId')) {
      discordUserId = searchParams.get('discordUserId')
    }

    if (searchParams.get('apiKey')) {
      apiKey = searchParams.get('apiKey')
    }
  }

  // Load User config from URL
  let streamazeKey = ''
  let streamerId = ''
  if (isUser) {
    if (searchParams.get('streamazeKey')) {
      streamazeKey = searchParams.get('streamazeKey')
    }

    if (searchParams.get('streamerId')) {
      streamerId = searchParams.get('streamerId')
    }
  }

  return (
    <ConfigContext.Provider
      value={{
        chatConfig: {
          ...chatConfig,
          tiktok: {
            ...chatConfig.tiktok,
            username: tiktokChat ? tiktokChat : chatConfig.tiktok.username,
          },
          youtube: {
            ...chatConfig.youtube,
            channel: youtubeChat ? youtubeChat : chatConfig.youtube.channel,
          },
          twitch: {
            ...chatConfig.twitch,
            username: twitchChat ? twitchChat : chatConfig.twitch.username,
          },
          kick: {
            ...chatConfig.kick,
            chatroomId: kickChatroomId
              ? kickChatroomId
              : chatConfig.kick.chatroomId,
            channelId: kickChannelId
              ? kickChannelId
              : chatConfig.kick.channelId,
          },
        },
        setChatConfig,
        obsConfig: {
          ...obsConfig,
          streamChannelId: obsChannel ? obsChannel : obsConfig.streamChannelId,
        },
        setObsConfig,
        statsConfig: {
          ...statsConfig,
          tiktokUsername: tiktokStats
            ? tiktokStats
            : statsConfig.tiktokUsername,
          youtubeChannel: youtubeStats
            ? youtubeStats
            : statsConfig.youtubeChannel,
          // twitchUsername: twitchStats
          //   ? twitchStats : statsConfig.twitchUsername,
          kickChannelName: kickStats ? kickStats : statsConfig.kickChannelName,
        },
        setStatsConfig,
        timestampConfig: {
          ...timestampConfig,
          discordChannelId: discordTimestamp
            ? discordTimestamp
            : timestampConfig.discordChannelId,
          youtubeChannel: youtubeTimestamp
            ? youtubeTimestamp
            : timestampConfig.youtubeChannel,
        },
        setTimestampConfig,
        slobsConfig: {
          ...slobsConfig,
          streamToken: streamToken ? streamToken : slobsConfig.streamToken,
          ttsVoice: ttsVoice ? ttsVoice : slobsConfig.ttsVoice,
          tiktokUsername: tiktokDonos
            ? tiktokDonos
            : slobsConfig.tiktokUsername,
          silentAudioInterval: slobsConfig.silentAudioInterval,
        },
        setSlobsConfig,
        keypadConfig: {
          ...keypadConfig,
          code: keypadCode ? keypadCode : keypadConfig.code,
        },
        setKeypadConfig,
        lanyardConfig: {
          ...lanyardConfig,
          discordUserId: discordUserId
            ? discordUserId
            : lanyardConfig.discordUserId,
          apiKey: apiKey ? apiKey : lanyardConfig.apiKey,
        },
        setLanyardConfig,
        currencyConfig,
        setCurrencyConfig,
        subathonConfig,
        setSubathonConfig,
        userConfig: {
          ...userConfig,
          streamerId: streamerId ? streamerId : userConfig.streamerId,
          streamazeKey: streamazeKey ? streamazeKey : userConfig.streamazeKey,
        },
        setUserConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider
