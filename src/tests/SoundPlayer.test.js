import SoundPlayer from '../other/SoundPlayer'
import SoundPlayerConsumer from '../other/SoundPlayerConsumer'
jest.mock('../other/SoundPlayer') // 通过调用jest返回一个有用的自动模拟，可以使用他来监视对类构造函数及所有方法的调用

beforeEach(() => {
  // 清除所有实例并调用 构造函数和所有方法
  SoundPlayer.mockClear()
})

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer()
  // 检查是否调用了类构造函数
  expect(SoundPlayer).toHaveBeenCalledTimes(1)
})

it('We can check if the consumer called a method on the class instance', () => {
  // 检查mockClear是否起作用
  expect(SoundPlayer).not.toHaveBeenCalled()

  const soundPlayerConsumer = new SoundPlayerConsumer()
  // 类构造函数再次被调用
  expect(SoundPlayer).toHaveBeenCalledTimes(1)

  const coolSoundFileName = 'song.mp3'
  soundPlayerConsumer.playSomethingCool()

  // mock.instances 可以用于自动模拟
  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0]
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile
  // theAutomaticMock.mock.instances[index].methodName.mock.calls
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName)
  // 相当于上面的检查
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName)
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1)
})
