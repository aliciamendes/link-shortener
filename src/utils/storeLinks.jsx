import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLinks(key) {
  const myLinks = await AsyncStorage.getItem(key);

  let links = JSON.parse(myLinks) || [];

  return links;
}

export async function saveLink(key, newLink) {
  let linksStored = await getLinks(key);
  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log("exite esse if");
    return;
  }

  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
  console.log("salvo");
}

export async function deleteLink(links, id) {
  let mylinks = links.filter((item) => {
    return (item.id !== id);
  });

  await AsyncStorage.setItem("linkShortenerLinks", JSON.stringify(mylinks));

  console.log("deletado");

  return mylinks;
}
